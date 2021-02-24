import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function CreateNewClient(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [newName, setNewName] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [createAt, setCreateAt] = useState('')

    const saveButtonHandler = () => {
        props.createNewClient(newName, newAddress, newPhoneNumber, createAt);
        toggle();
        setNewName('')
        setNewPhoneNumber('')
        setNewAddress('')
        setCreateAt('')
    }


    return (
        <div>
            <Button outline color="primary" onClick={toggle}> Create new client </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody className='d-grid g-1'>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Name: </span>
                        <input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            type="text" className="form-control" placeholder="Username"
                        />
                    </div>
                    <br/>

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Phone number: </span>
                        <input
                            value={newPhoneNumber}
                            onChange={(e) => setNewPhoneNumber(e.target.value)}
                            type="number" className="form-control" placeholder="1 999 999 99 99"/>
                    </div>
                    <br/>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Address: </span>
                        <input
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            type="text" className="form-control" placeholder="Address"
                        />
                    </div>
                    <br/>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Create at: </span>
                        <input
                            value={createAt}
                            onChange={(e) => setCreateAt(e.target.value)}
                            type="date" className="form-control" placeholder="Address"
                        />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={saveButtonHandler}
                    > Save </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}