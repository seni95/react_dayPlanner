import React, { Component } from 'react'

export default class AddToDo extends Component {
  
    nameRef=React.createRef();
    timeRef=React.createRef();
    formRef=React.createRef();

    onSubmit=event=>{
        event.preventDefault();

        const name = this.nameRef.current.value;
        let time = this.timeRef.current.value;
        time = Number(time);
        if(time>14){
            alert('가능한 시간을 입력하세요');
        }else{
            name &&time&& this.props.onAdd(name,time);
        }

        this.formRef.current.reset();
    }

  
    render() {
    return (
      <div className='addToDo'>
      <span>To Do </span>
      <form
      className='add-form'
      ref={this.formRef}
      onSubmit={this.onSubmit}
      >
        <input type="text"
        className='add-input' placeholder='add to do'
        ref={this.nameRef}
        />
        <input type="number" 
        className='add-input'
        ref={this.timeRef}/>
      <button className='add-button'><i className="fa-solid fa-pen"></i></button>
      </form>
      </div>
    )
  }
}
