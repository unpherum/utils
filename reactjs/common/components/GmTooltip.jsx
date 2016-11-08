import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class GmTooltip extends React.Component {
    
    render() {
        let id = <Tooltip id="{this.props.name}">{this.props.message}</Tooltip>;    
        return (
                <OverlayTrigger overlay={id} placement={this.props.position}>
                    {this.props.children}
                </OverlayTrigger>
        );
    }

}