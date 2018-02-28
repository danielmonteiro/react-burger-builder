import React, { Component } from 'react';

import classes from './Modal.css';
import Hoc from './../../../hoc/Hoc';
import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.openModal !== this.props.openModal;
    }

    render() {
        return(
            <Hoc>
                <Backdrop show={this.props.openModal} clicked={this.props.closeModalHandler} />
                <div
                    className={classes.Modal}
                    style={{
                        opacity: this.props.openModal ? '1' : '0',
                        transform: this.props.openModal ? 'translateY(0)' : 'translateY(-100vh)'
                    }}>
                    {this.props.children}
                </div>
            </Hoc>
        );
    }
}

export default Modal;