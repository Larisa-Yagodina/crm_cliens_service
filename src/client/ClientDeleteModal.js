import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function ClientDeleteModal(props) {

    const {modal, setModal, client} = props;
    const toggle = () => setModal(!modal);


    const deleteButtonHandler = (clientId) => {
        props.deleteClient(clientId)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you sure you want to delete?</ModalHeader>
                <ModalBody>
                    {client.name}, phoneNumber: {client.phoneNumber}
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => deleteButtonHandler(client.id)}
                        color="primary"> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}