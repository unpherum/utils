import React from 'react';
import ClientStore from '../stores/ClientStore';

export default (ComposedComponent) => {
  return class ValueLink extends React.Component {



    constructor() {
      super()
    }

    handleChange(e){
        console.log(e);
    }

    render() {
      return (
      <ComposedComponent onChange={this.handleChange.bind(this)}
        {...this.props} {...this.state}
         />
      );
    }
  }
};