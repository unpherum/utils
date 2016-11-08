import React from 'react';
import {Form} from 'react-bootstrap';
/**
 * Validated Form - container for all inputs
 *
 * Easy for us to validate all the input at once by call validateForm
 *
 *
 */
 export default class ValidatedForm extends React.Component {

  constructor(){
      super();

  }

  componentWillMount(){

  }

  render() {
    var self = this;
    return (
      <div {...this.props}>
                {this.props.children}
          </div>);
  }
};

