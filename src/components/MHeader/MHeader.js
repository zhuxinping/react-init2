import React from 'react';
import './index.less';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
@withRouter
class MHeader extends React.Component {
  back = () =>{
    this.props.history.goBack();
  };
  render(){
    return <div className="m-header">
      <i className="iconfont icon-fanhui" onClick={this.back}></i>
      {this.props.children}{this.props.lesson.title}
    </div>
  }
}
const mapStateToProps=(state)=>{
    return {...state.home};
};
export default connect(mapStateToProps)(MHeader);



