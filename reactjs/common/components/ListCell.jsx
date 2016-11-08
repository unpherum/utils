import React from 'react';
import {Label,Button} from "react-bootstrap";

export default class ListCell extends React.Component {

  constructor(){
      super();
  }


  render() {
    var self= this;
    return (
        <div className="col-xs-12 list-cell">
            <div className="col-xs-8">
                <h4>{this.props.title}</h4>
                <div className="col-xs-12">
                    {this.props.detail.map(function(detail,i){
                   return (
                       <div key={i}  className="display-inline props">
                           {detail.content}
                       </div>
                   )
                 })}
                </div>
            </div>
            <div className="col-xs-4 pull-right actions">

                 {this.props.actions.map(function(action,i){
                   return (
                       <div key={i} className="text-right"><i className={action.icon} onClick={action.action}></i></div>)
                 })}

            </div>
        </div>
     );
  }
};