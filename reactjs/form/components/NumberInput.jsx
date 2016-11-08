import React from 'react';
import {NumberPicker} from "react-widgets";
import localizer from 'react-widgets/lib/localizers/simple-number'
import Validator from 'common/util/Validator.js';

export default class NumberInput extends React.Component {
  constructor(){
      super();
      this.state = this._getInitialState();
      localizer()
      this.validator = new Validator();

  }

  _getInitialState(){
      return {
          numberValue: null,
          errors: '',
      }
  }

// onKeyedDown(e)
// {
//     alert(e.keyCode);
// }

  componentWillMount(){



  }

    onChange(newValue){
        //NumberPicker.onkeydown()
        // this.setState({
        //     numberValue: newValue
        // })

        this.props.valueLink.requestChange(newValue);
    }

    activateValidation(){
        if(this.props.validate!=null || this.props.validate!=undefined) {
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


      return(
          <div className={"form-group" + (this.props.compulsory===true?" compulsory":" ") }>
            <label>{this.props.title}</label>
            <NumberPicker
                defaultValue={null}
                //value = {this.state.numberValue}
                value={this.props.valueLink.value}
                //onChange = {this.onChange.bind(this)}
                onChange = {this.props.valueLink.requestChange}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                format = {this.props.format}
                //onKeyDown = {this.onKeyedDown.bind(this)}
            />
            <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>{this.state.errors}</div>
          </div>
      )
  }
};
