import React, { Component } from 'react'
import AddToDo from './addToDo'
import ToDoList from './toDoList'

export default class ToDo extends Component {

  handleDelete = work =>{

    this.props.onDelete(work);
  }

  handleAdd = (name,time) =>{
    this.props.onAdd(name,time);
  }

  handleSelect = (select) =>{
    this.props.onSelect(select);
  }

  showCursor=(id)=>{
    this.props.onShowCursor(id);
  }

  render() {
    return (
      <div className='toDoList'>
      <AddToDo onAdd={this.handleAdd}></AddToDo>
      {
        this.props.works.map(work=>(
          <ToDoList 
          key={work.id}
          works={work}
          onDelete={this.handleDelete}
          onSelect={this.handleSelect}
      onShowCursor={this.showCursor}
          ></ToDoList>
        ))
      }
      </div>
    )
  }
}
