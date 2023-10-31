import { Fragment} from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
       {ReactDOM.createPortal(<BackDrop onHide={props.onHidden}/>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
    </Fragment>
  );
};

export default Modal;
