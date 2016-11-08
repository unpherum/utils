import React from 'react';
import Spinner from 'react-spin';
import Modal from 'react-modal';


const customStyle = {
    overlay: {
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '0px',
        bottom: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2000,
    },
    content: {
        padding: '0px',
        border: 'none',
        background: 'none'
    }
};
const spinCfg = {
      width: 12,
      radius: 35,
    };
export default class Loader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var isOpen = this.props.isOpen;
        var onClose = this.props.onClose;

        return (
            <div>
                    <div style={{height:'400px'}} className={"text-center" + this.props.className}>
                        <Spinner config={spinCfg} />
                    </div>
            </div>
        );
    }

};
