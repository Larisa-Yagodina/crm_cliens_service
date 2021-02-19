import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroupItem} from 'reactstrap';


export default function OrderDeleteModal(props){

    const {modal, setModal, order} = props;
    const toggle = () => setModal(!modal);

    const deleteButtonHandler = (orderId) => {
        props.deleteOrder(orderId)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Are you sure you want to delete?</ModalHeader>
                <ModalBody>
                    <ListGroupItem>Client name: {' '}<b>{order.clientName}</b></ListGroupItem>
                    <ListGroupItem>Service: {' '}<b>{order.service.job}</b></ListGroupItem>
                    <ListGroupItem>Price: {' '}<b>${order.service.price}</b></ListGroupItem>                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => deleteButtonHandler(order.id)}
                        color="primary"> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}