import React from 'react';
import {NumberPicker} from "react-widgets";
import LinkState from 'common/components/LinkState';
import localizer from 'react-widgets/lib/localizers/simple-number'
import Validator from 'common/util/Validator.js';

export default class StartEndAgeComponent extends React.Component {

  constructor(){
      super();
      this.state = this._getInitialState()
      this.validator = new Validator();
      localizer()

  }

    onStartAgeChange(newValue){
        this.setState({
            //start_age: newValue,
            //min_end_age: newValue,
             //end_age: newValue+1
            min_end_age: newValue + 1
        })

        this.props.startValueLink.requestChange(newValue);
    }
    onEndAgeChange(newValue){
        // this.setState({
        //     end_age: newValue
        // })

        this.props.endValueLink.requestChange(newValue);
    }

    _getInitialState() {
        return {
            start_age: '',
            min_end_age: '',
            end_age: '',
            errors: '',
            start_age_error : '',
            end_age_error : ''
        };
    }

    activateValidation(){

        if(this.props.validate!=null || this.props.validate!=undefined) {
            var validators = this.props.validate.split(',')

            var errorMsgStartAge = this.validator.checkAll(validators, this.props.startValueLink)

            var errorMsgEndAge = this.validator.checkAll(validators, this.props.endValueLink)

            var errorMsg = errorMsgStartAge + errorMsgEndAge;

            this.setState({
                start_age_error: errorMsgStartAge,
                end_age_error: errorMsgEndAge,
                errors: errorMsg
            })

            if (errorMsg.length > 0)
                this.props.notifyError(errorMsg);
            else
                this.props.notifyErrorCleared();
        }
    }

  render() {
    return (
        <div className={"form-group " + this.props.className + (this.props.compulsory===true?" compulsory":" ") }>
            <label>{this.props.start_age_title}</label>
            <NumberPicker
                defaultValue={null}
                //value = {this.state.start_age}
                value = {this.props.startValueLink.value}
                onChange = {this.onStartAgeChange.bind(this)}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                format = {this.props.format}
            />
            <div className={"alert alert-warning " + (this.state.start_age_error.length>0 ?" show":" hidden")}>{this.state.start_age_error}</div>
            <label>{this.props.end_age_title}</label>
             <NumberPicker
                defaultValue={null}
                //value = {this.state.end_age}
                value = {this.props.endValueLink.value}
                onChange = {this.onEndAgeChange.bind(this)}
                min={this.state.min_end_age}
                max={this.props.max}
                step={this.props.step}
                format = {this.props.format}
            />
            <div className={"alert alert-warning " + (this.state.end_age_error.length>0 ?" show":" hidden")}>{this.state.end_age_error}</div>
         </div>
     );
  }
};