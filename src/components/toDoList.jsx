import React, { Component } from 'react'

export default class ToDoList extends Component {

    //작업의 이름, 작업을 수행하는데에 걸리는 시간

    handleDelete = ()=>
    {
    this.props.onDelete(this.props.works);
    }

    handleSelect = ()=>{
      const {id} = this.props.works;
      this.showCursor(id);
      this.props.onSelect(id);
    }

    showCursor=(id)=>{
      this.props.onShowCursor(id);
    }

  render() {
    const {name,time,count} =this.props.works;
    return (
      <li className='works'>
       <i class="fa-solid fa-pen-fancy"></i>
        <span className='workName' onClick={this.handleSelect}> {name} </span>
        <span className='workTime'>{time}시간 </span>
        <span> 미할당 시간:{count}</span>
        <button className='work-button work-delete' onClick={this.handleDelete}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  }
}
