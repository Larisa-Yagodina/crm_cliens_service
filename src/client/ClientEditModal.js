import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function ClientUpdateModal(props) {

    const {modal, setModal, client} = props;
    const toggle = () => setModal(!modal);
    const [name, setName] = useState(client.name)
    const [address, setAddress] = useState(client.address)
    const [phoneNumber, setPhoneNumber] = useState(client.phoneNumber)

    const updateButtonHandler = (clientId, name, address, phoneNumber) => {
        const client = {name, address, phoneNumber};
        props.updateClient(clientId, client)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update client</ModalHeader>
                <ModalBody>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Client name: </span>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="form-control" placeholder="name"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Address: </span>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text" className="form-control" placeholder="address"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Phone number: </span>
                        <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="text" className="form-control" placeholder="phone number"
                            aria-describedby="basic-addon1"/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => updateButtonHandler(client.id, name, address, phoneNumber)}
                        color="primary"> Update </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}