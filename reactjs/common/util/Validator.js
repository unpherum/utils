// import XDate from './../../../public/static/xdate';
import validate from 'validate.js';
import moment from 'moment';

export default class Validator {

    constructor(){
        validate.extend(validate.validators.datetime, {
            parse: function(value, options) {
                return +moment.utc(value);
            },
            format: function(value, options) {
                var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
                return moment.utc(value).format(format);
            }
        })
    }

    checkAll(arrayOfchecks, fieldToValidate) {
        var that = this;

        if(arrayOfchecks==null||arrayOfchecks==undefined)
            return;

        var errorsArray = [];
        errorsArray = arrayOfchecks.map(function (validator) {
            validator = $.trim(validator);
            return that._checkByValidator(validator, fieldToValidate);
        });

        if (errorsArray.length > 0)
            return errorsArray.join('');
        else
            return '';
    }

    _checkByValidator(validator, fieldToCheck) {

        var errorObj;

        var requiredConstraints = {
            value: {
                presence: true
            }
        };

        var emailConstraints = {
          value: {
            email: true
          }
        };

        var numericConstraints = {
          value: {
            format: {
              pattern: "[0-9]+",
              flags: "i",
              message: "can only contain numbers"
            }
          }
        };
        var minAgeConstraints = {
            value:{
                datetime:{
                    dateOnly: true,
                    latest: moment.utc().subtract(18, 'years'),
                    message: "^You need to be at least 18 years old"
                }
            }
        };

        var greaterThanZeroConstraints = {
            value: {
                numericality: {
                    greaterThan: 0
                }
            }
        };

        switch(validator){
            case "required":
                errorObj = validate(fieldToCheck, requiredConstraints);

                if(errorObj)
                    return errorObj.value;
                else return '';

                break;
            case "email":
                errorObj = validate(fieldToCheck, emailConstraints);

                if(errorObj)
                    return errorObj.value;
                else return '';
                break;
            case "numeric":
                errorObj = validate(fieldToCheck, numericConstraints);

                if(errorObj)
                    return errorObj.value;
                else return '';
                break;
            case 'minAge':
                errorObj = validate(fieldToCheck, minAgeConstraints);

                if(errorObj)
                    return errorObj.value;
                else return '';
                break;
            case 'greaterThanZero':
                errorObj = validate(fieldToCheck, greaterThanZeroConstraints);
                if (errorObj) {
                    return errorObj.value;
                } else {
                    return "";
                }
                break;
        }
    }
}
