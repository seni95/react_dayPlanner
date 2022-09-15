import React, { Component } from 'react'

export default class Time extends Component {
    state={
//btnActive :this.props.onOff,
      //이렇게 하면 props에 변화가 있더라도, 그걸 state에 바로 저장이 되지 않는다. =>그래서 삭제
      //props를 막바로 받는 내부 함수나 render 함수에만 바로 적용이되고
      //state 값에는 바로 적용이 안되어서 (setState를 이용하지 않는 이상)

      workName:'',
        workId:0
    }
 

    handleOnoff=()=>{
      const btnActive = this.props.onOff;
      console.log(btnActive);
      const currentSelect = this.props.currentSelect;
      const {hour} = this.props;
      if(btnActive==0){
        this.props.works.map(item=>
            {
                if(item.id===currentSelect&&item.count>0){
        this.setState({workName:item.name});
        // console.log(this.state.workName); 
        //이렇게 프린트 해도 ''값만 나온다.
        // setState는 컴포넌트에 변화가 있어서 재랜더링될때 (랜더함수가 재 호출될때)
        // state 값을 배열하기 때문이다.
                  //비동기적 실행
        this.props.onHandleTimeCountMinus(item.id);
            this.setState({workId:item.id});
            this.props.onRegisterNumberToClock(item.id,hour);

                }
               else if(item.id===currentSelect&&item.count<=0){
                this.clearCursor();
                alert(`이미 ${item.name} 에 관하여 시간을 전부 배분하였습니다`);
                this.props.onClearCurrent();
              }
            })
      }else if(btnActive!=0){
        this.props.works.map(item=>
          {
              if(item.id===this.state.workId&&item.count<item.time){
      this.setState({workName:''});
      this.props.onHandleTimeCountPlus(this.state.workId);
      this.setState({workId:0});
      this.props.onClearNumberToClock(this.props.hour);
              }
             else return ;
          })
      }
    }
    
    clearCursor = ()=>{
      this.props.onClearCursor();
    }

 

  render() {
    const {hour} = this.props;
    const btnActive = this.props.onOff;

    return (
        <div className='timePieceWrapper'>
    <div>{hour}</div>
      <div className={'timePiece'+(btnActive != 0?" active":"")}
      onClick={this.handleOnoff}
      >
        <span>{btnActive !=0 ?this.state.workName:""}</span>
        {
        /* onOff값이 0으로 수정되면, workId랑 workName의 값을 초기화 시켜줘야해요... */
        // 아니면 이전에 부여받은 onOff 값의 workId랑 Name을 메모리에 계속 가지고 있을 작정이여요..
        
        }
      </div>
      </div>
    )
  }
}
