import React from 'react';
import {DateTimePicker} from "react-widgets";
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import configure from 'react-widgets/lib/configure';
import Moment from 'moment';
import Validator from 'common/util/Validator.js';

export default class DateComponent extends React.Component {

    constructor() {

        configure.setDateLocalizer(momentLocalizer(Moment));
        super();
        this.state = {
            date: null,
            errors: ''
        };
        this.validator = new Validator();
    }

    componentWillReceiveProps(newProps) {
        var value = newProps.valueLink.value;
        this.setState({
            date: value
        })
    }

    onChange(date, dateStr) {
        this.props.valueLink.requestChange(dateStr);
        this.setState({
            date: dateStr
        });
    }

    componentWillMount() {

    }

    activateValidation() {
        if (this.props.validate != null || this.props.validate != undefined) {
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
          var value = this.state.date;
          if (value != null && value != "") {
              value = Moment(this.state.date, "YYYY-MM-DD").toDate();
          } else {
              value = null;
          }
        return(
          <div className={"form-group " + (this.props.compulsory===true?" compulsory":" ") }>
            <label className="control-label">{this.props.title}</label>
            <div className="col-xs-12">
              <DateTimePicker placeholder={this.props.placeholder} format={"YYYY-MM-DD"} time={false} value={value} onChange={this.onChange.bind(this)} onBlur={this.activateValidation.bind(this)}/>
            </div>
            <div className="clearfix"></div>
            <div className={"alert alert-warning " + (this.state.errors.length>0 ?" show":" hidden")}>
              {this.state.errors}
            </div>
         </div>
        );
      }
};