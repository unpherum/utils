import React from 'react';
import {Input,ButtonGroup,Button} from 'react-bootstrap';
export default class CheckboxComponent extends React.Component {

  constructor(){
      super();
      this.state = this._getInitialState();
  }
  _getInitialState(){
      return {
          selectedValue: ''
      }
  }

  handleClick(key){
      var value = $(key.target).val();
      this.props.valueLink.requestChange(value);
  }

  render() {
    var self = this;
    return (
      <div className="form-group">
          <label>{this.props.title}</label>
          {this.props.options.map(function(option,i){
              return (<label key={i} htmlFor={i} className="tp-radio" onClick={self.handleClick.bind(self)}>{option.label}
                  <i className={option.value == self.props.valueLink.value?'fa fa-check-square':'fa fa-square-o'}></i>
                  <input standalone type="radio" id={i} value={option.value} className="hidden"/>
              </label>);
              //return (<Input type="radio" label={option.label} wrapperClassName="col-xs-2"/>)
              //return (<Button><Input type="radio" label={option.label} standalone/></Button>)
          })}

      </div>);
  }
};