import React, { Component } from 'react'
import Header from './components/header'
import ToDo from './components/toDo'
import './App.css'
import Timetable from './components/timetable'

export default class App extends Component {



  state = {

    // 오늘 할 일을 받아 저장(배열)
    works: [
      { id: 1, name: '수면', time: 7, count: 7 },
      { id: 2, name: '운동', time: 2, count: 2 }
    ],

    // 사용자가 현재 선택한 할 일의 값을 받아서 저장 (timetable에 시간을 배분하기 위함)
    currentSelect: 0
    ,
    clock:[0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0]

  }




  // 사용자가 지정한 할 일을 마우스 커서를 통해 보여주는 함수

  showCursor = (id) => {
    const cursor = document.querySelector('.cursor');

    this.state.works.map(item => {
      if (item.id === id) {
        console.log(item.name);
        cursor.innerHTML = item.name;
      }
    })

    document.addEventListener('mousemove', function (e) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

    })

  }

  // 할 일의 count가 0이 되어, 더이상 timetable에 배분할 수 없을 때
  // 마우스 커서를 clear 해주는 함수
  clearCursor = () => {
    const cursor = document.querySelector('.cursor');
    cursor.innerHTML = '';

  }

  // toDo에 리스트 값을 더하거나 삭제하는 함수
  handleAdd = (name, time) => {
    const works = [...this.state.works, { id: Date.now(), name: name, time: time, count: time }];
    let limit = 0;

    works.map(item => {
      limit = limit + item.count;
    })
    if (limit > 23) {
      alert('하루는 24시간 입니다.');
    } else {
      this.setState({ works });
    }
  }



  handleDelete = work => {
    const checkTimetable = this.state.clock.map(item=>{
      if(item==work.id){
        //해당 clock 배열의 값을 할당받은 time 컴포넌트의 모든 state 값이 초기화 되어야함
        item=0;
      }
      return item;
    })

    this.setState({clock:checkTimetable});

    const works = this.state.works.filter(item => item.id !== work.id);
    this.setState({ works });
  }


  //사용자가 지정한 할 일을 timetable에 배분하기 위해 currentSelect의 값을 받아
  // state에 저장하는 함수
  handleSelect = (select) => {
    this.setState({ currentSelect: select });
  }



  // 사용자가 timetable에 시간을 배분할 때 마다, 
  // toDoList에 있는 count의 값을 줄이거나 늘려주는 함수
  handleTimeCountMinus = (id) => {
    const works = this.state.works.map(item => {
      if (item.id === id) {
        const count = item.count - 1;
        if (count == 0) {
          this.clearCursor();
          this.clearCurrentSelect();
        }
        return { ...item, count: count };
      }
      return item;
    })
    this.setState({ works });
  }


  handleTimeCountPlus = (id) => {
    const works = this.state.works.map(item => {
      if (item.id === id) {
        const count = item.count + 1;
        return { ...item, count: count };
      }
      return item;
    })
    this.setState({ works });
  }

  //currentSelect 초기화 함수 (works 배열의 객체중, id 값이 0인 객체는 존재할 수 없으므로 0으로 초기화)
  clearCurrentSelect = () => {
    const currentSelect = 0;
    this.setState({ currentSelect });
  }

  registerNumberToClock=(id,time)=>{
    let hours = this.state.clock;
    hours[time] = id;
    const hoursReset = hours;
    this.setState({clock:hoursReset});
    console.log(this.state.clock);
  }

  clearNumberToClock=(time)=>{
    let hours = this.state.clock;
    hours[time] = 0;
    console.log(hours);
    const hoursReset = hours;
    this.setState({clock:hoursReset});
    console.log(this.state.clock);
  }

  render() {
    return (
      <>
        <div className='Wrapper'>
          <Header></Header>
          <ToDo
            works={this.state.works}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onSelect={this.handleSelect}
            onShowCursor={this.showCursor}
          ></ToDo>
          <Timetable works={this.state.works}
            currentSelect={this.state.currentSelect}
            onHandleTimeCountPlus={this.handleTimeCountPlus}
            onHandleTimeCountMinus={this.handleTimeCountMinus}
            onClearCursor={this.clearCursor}
            onClearCurrent={this.clearCurrentSelect}
            clock={this.state.clock}
            onRegisterNumberToClock = {this.registerNumberToClock}
            onClearNumberToClock = {this.clearNumberToClock}
          ></Timetable>
        </div>
        <div class="cursor"></div>
      </>
    )
  }
}

