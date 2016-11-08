import React from 'react';
import {Label} from 'react-bootstrap';
var accounting = require('accounting');
var moment = require('moment');
import Constant from '../constants/CommonConstants';
export default class DisplayGroup extends React.Component {



  constructor() {
      super();

  }
  componentDidMount(){
  }

  render() {
    var labelClassName,valueClassName,value = '';
    if(this.props.direction=="vertical")
    {
        labelClassName="col-xs-12";
        valueClassName="col-xs-12";
    }
    else
    {
        labelClassName="col-xs-4";
        valueClassName="col-xs-8";
    }


    if(this.props.item.type == Constant.DisplayType.currency)
        value = accounting.formatMoney(this.props.item.value);
    else if(this.props.item.type == Constant.DisplayType.date)
        value = moment(this.props.item.value);
    return (
      <div className="col-xs-12 display-group">
          <Label className={labelClassName}>{this.props.item.name}</Label>
          <Label className={valueClassName}>{value}</Label>
      </div>);
  }
};