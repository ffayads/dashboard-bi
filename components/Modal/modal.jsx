import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Draggable from 'react-draggable';

const PersonalModal = (props) => {
    let size = props.size || 'sm';
    const changeVal = () => { props.setModal(false) }
    let id = Math.floor(Math.random() * 10);

    if (props.Draggable != undefined && props.Draggable === true) {
        return (
            <>
                <Draggable>
                    <Modal isOpen={props.modal} toggle={changeVal} size={size} key={"modal__" + id}>
                        <ModalHeader className="justify-content-center" toggle={changeVal}>
                            <b> {props.title} </b>
                        </ModalHeader>
                        <ModalBody>
                            {props.children}
                        </ModalBody>
                    </Modal>
                </Draggable>
            </>
        )
    } else {
        return (
            <>
                <Modal isOpen={props.modal} toggle={changeVal} size={size}>
                    <ModalHeader className="justify-content-center" toggle={changeVal}>
                        <b> {props.title} </b>
                    </ModalHeader>
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                </Modal>
            </>
        )

    }
}

export default PersonalModal;