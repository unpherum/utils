    import React from 'react';
import {Input} from 'react-bootstrap';
import CommonConstant from 'common/constants/CommonConstants';
export default class YesNoComponent extends React.Component {

  constructor(){
      super();
  }
  render() {
    var selectedValue = this.props.selectedValue;
    var self=this;
    return (
      <div className="form-group">
          {CommonConstant.YES_NO_OPTION.map(function(option,i){
              return (<label key={i} className="tp-checkbox">{option.label}<input type="radio" value={option.value} {...self.props} checked={selectedValue==self.props.selectedValue?'checked':''}/></label>);
          })}
      </div>);
  }
};