import React from 'react';
import {connect} from 'react-redux';
import MHeader from "../../components/MHeader/MHeader";
import './index.less'
 class Detail extends React.Component {

  render(){

    return <div className="detail">
        <MHeader>详情页</MHeader>
        <h1>{this.props.lesson.title}</h1>
        <video src={this.props.lesson.video} style={{width:'100%'}} poster={this.props.lesson.poster} controls={true}></video>
          </div>
  }
}
const mapStateToProps=(state)=>{
    return {...state.home}
};
/*const mapDispatchToProps=(dispatch)=>{
    return{
        //发送action是异步，异步执行完毕然后执行dispatch
        increase:()=>dispatch(actions.counterAsyncAdd(Types.ADD_ASYNC,1)),
        decrease:()=>dispatch(actions.counterAsyncAdd(Types.ADD_ASYNC,-1)),
        lessonInit:(id)=>dispatch(actions.lessonAsyncInit(id)),
        initBanner:()=>dispatch(actions.bannerAsyncInit()),
        //执行dispatch是直接提交同步状态
        increaseNow:()=>dispatch({type:Types.ADD_NOW,count:1}),
        decreaseNow:()=>dispatch({type:Types.ADD_NOW,count:-1})
    }
}*/
export default connect(mapStateToProps)(Detail);


