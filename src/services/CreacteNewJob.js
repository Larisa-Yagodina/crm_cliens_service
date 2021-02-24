import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function CreateNewJob(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [newJob, setNewJob] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newPrimeCost, setNewPrimeCost] = useState('')
    const [newEmployee, setNewEmployee] = useState('')

    const saveButtonHandler = (newJob, newPrice, newPrimeCost, newEmployee) => {
        props.createNewJob(newJob, newPrice, newPrimeCost, newEmployee)
        setNewJob('')
        setNewPrice('')
        setNewPrimeCost('')
        setNewEmployee('')
        toggle()
    }

    return (
        <div>
            <Button outline color="primary" onClick={toggle}> Create new job </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Job: </span>
                        <input value={newJob}
                               onChange={(e) => setNewJob(e.target.value)}
                               type="text" className="form-control" placeholder="job"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Price: </span>
                        <input
                            value={newPrice}
                            onChange={(e) => setNewPrice(Number(e.target.value))}
                            type="text" className="form-control" placeholder="price"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Prime cost: </span>
                        <input
                            value={newPrimeCost}
                            onChange={(e) => setNewPrimeCost(Number(e.target.value))}
                            type="text" className="form-control" placeholder="prime cost"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Employee: </span>
                        <input
                            value={newEmployee}
                            onChange={(e) => setNewEmployee(e.target.value)}
                            type="text" className="form-control" placeholder="employee"
                            aria-describedby="basic-addon1"/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        disabled={!newJob || !newPrice || !newPrimeCost || !newEmployee}
                        color="primary"
                        onClick={() => saveButtonHandler(newJob, newPrice, newPrimeCost, newEmployee)}> Save </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}