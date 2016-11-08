import React from 'react';
import {Form} from 'react-bootstrap';
/**
 * Validated Form - container for all inputs
 *
 * Easy for us to validate all the input at once by call validateForm
 *
 *
 */
export default class ValidatedFormHorizontal extends React.Component {

    constructor(){
        super();

    }

    componentWillMount(){

    }

    render() {
        var self = this;
        return (
            <Form className="col-xs-12" {...this.props}>
                {this.props.children}
            </Form>);
    }
}

