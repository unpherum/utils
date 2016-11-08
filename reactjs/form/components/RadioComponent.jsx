import React from 'react';
import {Input,ButtonGroup,Button} from 'react-bootstrap';
import Validator from 'common/util/Validator.js';

export default class RadioComponent extends React.Component {

  constructor(){
      super();
      this.state = this._getInitialState();
      this.validator = new Validator();
  }
  _getInitialState(){
      return {
          selectedValue: '',
          errors: ''
      }
  }

   componentDidUpdate(prevProps, prevState){

   }

  handleClick(key){
      
      var value = $(key.target).val();

      if(value=="false")
          value = false;
      else if (value=="true")
          value = true;

      this.props.valueLink.requestChange(value);

  }

  componentWillMount(){
      
  }

    componentWillReceiveProps(nextProps) {

     }


    activateValidation(){
        if(this.props.validate!=null || this.props.validate!=undefined)
        {
            var validators = this.props.validate.split(',');
            var errorMsg = this.validator.checkAll(validators, this.props.valueLink);
            this.setState({
                errors: errorMsg
            });
            if (errorMsg.length > 0) {
                this.props.notifyError(errorMsg);
                return true;
            } else {
                if (this.props.notifyErrorCleared) {
                    this.props.notifyErrorCleared();
                }
            }
        }
        return false;
    }

  render() {
    var self = this;
    return (    
      <div className="form-group ">
          <div className={"col-xs-12 " + (this.props.nolabel===true?" hidden":" ") + (this.props.compulsory===true?" compulsory":" ")}>
            <label>{this.props.title}</label>
          </div>
          {this.props.options.map(function(option,i){
              return (<label key={i} for={i} className="tp-radio-label tp-radio" onClick={self.handleClick.bind(self)}>{option.label}
                  <i className={option.value == self.props.valueLink.value?'fa fa-check-square':'fa fa-square-o'}></i>
                  <input standalone type="radio" id={i} value={option.value} className="hidden"/>
              </label>);
              //return (<Input type="radio" label={option.label} wrapperClassName="col-xs-2"/>)
              //return (<Button><Input type="radio" label={option.label} standalone/></Button>)
          })}
        <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>{this.state.errors}</div>
      </div>);
  }
};