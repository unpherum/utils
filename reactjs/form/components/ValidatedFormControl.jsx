import React from 'react';
import {FormControl} from 'react-bootstrap';
import Validator from 'common/util/Validator.js';
/**
 * Validated Input
 *
 *
 */
export default class ValidatedFormControl extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: ''
        };
        this.validator = new Validator();

    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidUpdate(prevProps,  prevState){

    }

    onBlur() {
        this.activateValidation()
    }


    activateValidation(){
        if (this.props.validate!=null || this.props.validate!=undefined) {
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
            <div>
                <FormControl {...this.props} onBlur={ this.onBlur.bind(this) }/>
                <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>{this.state.errors}</div>
            </div>
        );
    }
}

