import React from 'react';
import { Modal } from 'react-bootstrap';

class PopupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div >
                <Modal className={this.props.className} bsClass="modal" show={this.state.showModal} onHide={this.closeModal}>
                    {
                        this.props.children
                    }
                </Modal>
            </div>
        );
    }
}

PopupModal.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.element
};

export default PopupModal;

