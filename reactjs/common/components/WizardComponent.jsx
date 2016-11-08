import React from 'react';
import { Router, Route,Link } from 'react-router';
import {Nav,NavItem} from 'react-bootstrap';
export default class WizardComponent extends React.Component {

  constructor(){
      super();
      this.state = this._getInitialState();
  }

  _getInitialState(){
      return {
          currentStep:0
      }
  }

  componentDidMount(){
      this.setState({

      });
  }
  handleSelect(selectedKey){
        this.setState({
            currentStep: selectedKey
        })
  }
  componentWillReceiveProps(props){
        if(props.currentStep)
        {
            this.setState({
                currentStep: props.currentStep
            })
        }
  }

  renderNav(total,step,link,title,currentStep){
      if(step==0)
      {
          return ( <NavItem to={link} key={step} activeKey={step} >{step+1}.&nbsp;{title}<div className="nav-arrow"></div></NavItem>)
      }
      else if(step==(total-1))
            return ( <NavItem activeKey={step}  key={step} to={link}><div className="nav-wedge"></div>{step+1}.&nbsp;{title}</NavItem>)
      else
          return ( <NavItem activeKey={step} key={step} to={link}><div className="nav-wedge"></div>{step+1}.&nbsp;{title}<div className="nav-arrow"></div></NavItem>)
  }

  render() {

    var wizardSteps = [];
    var k=0, length = this.props.steps.length;

    for(var step of this.props.steps)
    {
        wizardSteps[k] = this.renderNav(length,k,step.to,step.title);
        k=k+1;
    }
    return (
      <div className="wizard col-xs-12">
          <Nav bsStyle='pills' key={this.state.currentStep} className="nav-wizard" >
              {wizardSteps}
            </Nav>

      </div>);
  }
};