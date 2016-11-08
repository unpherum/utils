import React from 'react';
import classnames from 'classnames';

export default class FormGroup extends React.Component {

    render() {
        let contentClass = classnames(
            "form-group",
            this.props.className,
            {"compulsory": this.props.compulsory}
        );
        return (
            <div className={contentClass}>
                <label className="col-xs-4">{this.props.label}</label>
                <div className="col-xs-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}