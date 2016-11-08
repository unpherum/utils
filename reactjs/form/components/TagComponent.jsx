import React from 'react';
import {Nav,NavItem} from 'react-bootstrap';

export default class DateComponent extends React.Component {

  constructor(){
      super();
  }
  onClick(){
    this.props.onClick(this);
  }
  render() {
    return (
        <Nav bsStyle='pills' activeKey={1} onSelect={handleSelect}>
            {this.props.data.map(function(item,i){
                <NavItem eventKey={1}>{item.title}</NavItem>
                
            })
            
            }

      </Nav>
     );
  }
};