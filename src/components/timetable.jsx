import React, { Component } from 'react'
import Time from './time'

export default class Timetable extends Component {
  

    handleTimeCountPlus=(id)=>{
        this.props.onHandleTimeCountPlus(id);
    }

    handleTimeCountMinus = (id)=>{
      this.props.onHandleTimeCountMinus(id);
    }

    clearCursor = ()=>{
      this.props.onClearCursor();
    }

    clearCurrentSelect = ()=>{
      this.props.onClearCurrent();
    }

    registerNumberToClock = (id,time) =>{
      this.props.onRegisterNumberToClock(id,time);
    }

    createTimetable=()=>{
      
    }


    clearNumberToClock=(time)=>{
      this.props.onClearNumberToClock(time);
      
    }
  

  render() {

    let time = -1;


    return (
      <div className='timetable'>
       {
       
       this.props.clock.map(item=>{
        time++;
        return (<Time hour={time}
          onOff ={item}
          works={this.props.works}
          currentSelect={this.props.currentSelect}
          onHandleTimeCountPlus={this.handleTimeCountPlus}
          onHandleTimeCountMinus={this.handleTimeCountMinus}
          onClearCursor = {this.clearCursor}
          onClearCurrent = {this.clearCurrentSelect}
          onRegisterNumberToClock = {this.registerNumberToClock}
          onClearNumberToClock = {this.clearNumberToClock}
          ></Time>)
       }
          
       )
       
       }
      </div>
    )
  }
}
