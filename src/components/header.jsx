import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    const now = new Date();
    const Year = now.getFullYear();
    const Month = now.getMonth()+1;
    const today = now.getDate();

    return (
      <header>
        <span className='title'>Day Planner</span>
        <span className='date'>{Year}년 {Month}월 {today}일</span>
      </header>
    )
  }
}
