import React from 'react';
import {NumberPicker} from "react-widgets";
import localizer from 'react-widgets/lib/localizers/simple-number'
import Validator from 'common/util/Validator.js';

export default class ValidatedNumberPicker extends React.Component {
    constructor(){
        super();
        this.state = this._getInitialState();
        localizer()
        this.validator = new Validator();

    }

    _getInitialState(){
        return {
            errors: ''
        }
    }

    componentWillMount(){

    }

    onBlur(e) {
        this.activateValidation();
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    activateValidation(){
        if (this.props.validate!=null || this.props.validate!=undefined) {
            var validators = this.props.validate.split(',');
            var errorMsg = this.validator.checkAll(validators, this.props.valueLink?this.props.valueLink:this.props);
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
        return(
            <div>
                <NumberPicker {...this.props} onBlur={ this.onBlur.bind(this) } />
                <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>{this.state.errors}</div>
            </div>
        );
    }
};
