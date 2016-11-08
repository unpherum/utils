import React from 'react';
import Switch from 'react-bootstrap-switch';


export default class BasicSwitch extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <Switch state={this.props.state} value={this.props.value} onText="Basic" offColor="primary" offText="Advanced" onChange={this.props.onChange} />
        );
    }

};
