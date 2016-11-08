import React from 'react';
import classnames from 'classnames';

export default class ListItem extends React.Component {

    getTitle() {

    }

    getBody() {

    }

    deleteItem() {

    }

    editItem() {

    }

    handleDoubleClick() {
        if (this.props.doubleClickHandler) {
            this.props.doubleClickHandler(this.props.item);
        }
    }

    render() {
        const title = this.getTitle();
        const body = this.getBody();
        var contentClass = classnames(
            "col-xs-12 col-sm-6 col-md-4 col-lg-3 list-item-wrapper",
            {"spouse-item": this.props.item.ownership==='SP'},
            {"selected-item": this.props.isSelected===true}
        );
        return (
            <div className={contentClass} onDoubleClick={this.handleDoubleClick.bind(this)}>
                <div className="list-item">
                    <div className="list-item-header">
                        <h4 className="list-item-title">{title}</h4>
                    </div>
                    <div className="list-item-body">
                        {body}
                    </div>
                    <div className="list-item-footer">
                        <div className="col-xs-6 list-item-button">
                            <button onClick={this.editItem.bind(this)}><i className="fa fa-pencil"></i>Edit</button>
                        </div>
                        <div className="col-xs-6 list-item-button">
                            <button className="red-button" onClick={this.deleteItem.bind(this)}><i className="fa fa-trash"></i>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}