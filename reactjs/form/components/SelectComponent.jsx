import React from 'react';
import {DropdownList} from "react-widgets";
import Validator from 'common/util/Validator.js';


export default class SelectComponent extends React.Component {

  constructor(){
      super();
      this.state = this._getInitialState()
      this.validator = new Validator();


  }
  onClick(){

  }

    _getInitialState() {
        return {
            errors: ''
        };
    }

    componentDidUpdate(prevProps, preveState){

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

  componentWillMount(){
    
  }

    onBlur() {
        this.activateValidation()
    }

  render() {
    
    return (
        <div className={"form-group " + this.props.className }>
            <div className={this.props.compulsory===true?" compulsory":" "}>
                <label>{this.props.title}</label>
            </div>
           <DropdownList
               data={this.props.options}
               textField="label"
               valueField="value"
               {...this.props}
               defaultValue={this.props.valueLink.value}
               onChange={this.props.valueLink.requestChange}
               filter='contains'
                onBlur={ this.onBlur.bind(this) }
            />
            <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>{this.state.errors}</div>
         </div>
     );
  }
};