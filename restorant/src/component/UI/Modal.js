import React, { Fragment } from 'react'
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css'

const BackDrop=props=>{
    return <div className={classes.backdrop} />
};

const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElem=document.getElementById('overlay');

const Modal = (props) => {


  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop />,portalElem)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElem)}
    </Fragment>
  )
}

export default Modal