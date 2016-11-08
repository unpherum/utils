import React from 'react';
import {Label,Button} from "react-bootstrap";

export default class DetailCell extends React.Component {
  _getInitialState()
  {
      return {
          active: true
      }
  }
  constructor(){
      super();
      this.state=this._getInitialState();
  }

  toggle(){
      var currentState = this.state.active;
      var nextState=true;
      if(this.state.active)
      {
          nextState=false;
      }
        this.props.callback(this.props.id);
      this.setState({
        active: nextState
      });
  }
  render() {

    var buttonClass= "fa fa-1x "+ (this.state.active?"fa fa-check-square":"fa fa-square");
      // console.log("this.state.active",this.state.active);
      // console.log("buttonClass",buttonClass);
    return (
        <div className="col-xs-12 detail-cell">
            <div className="col-xs-2">
                <Button onClick={this.toggle.bind(this)}><i className={buttonClass}></i></Button>
            </div>
            <div className={this.props.selectable?'col-xs-10':'col-xs-12'}>
                <div className="col-xs-12 title">
                    <Label bsSize="large" bsStyle="info">{this.props.title}</Label>
                </div>
                <div className="col-xs-12 detail">
                    <span>{this.props.detail}</span>
                </div>
            </div>
        </div>
     );
  }
};