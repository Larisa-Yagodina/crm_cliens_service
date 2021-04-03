import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useHistory} from "react-router-dom";


export default function CreateNewClient(props) {

    const [newName, setNewName] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [createAt, setCreateAt] = useState('')

    let history = useHistory();

    const saveButtonHandler = () => {
        props.createNewClient(newName, newAddress, newPhoneNumber, createAt);
        setNewName('')
        setNewPhoneNumber('')
        setNewAddress('')
        setCreateAt('')
        history.goBack();
    }

    const goToClientList = () => {
        history.push("/clients");
    }


    return (
        <div>

            <div toggle={goToClientList}>
                <h2 toggle={goToClientList}>Create new client</h2>
                <div className='d-grid g-1'>
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

                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={saveButtonHandler}
                    > Save </Button>{' '}
                    <Button color="secondary" onClick={goToClientList}> Cancel </Button>
                </div>
            </div>

        </div>
    )
}