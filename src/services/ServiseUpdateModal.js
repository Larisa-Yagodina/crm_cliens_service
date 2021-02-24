import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function ServiceUpdateModal(props) {

    const {modal, setModal, job} = props;
    const toggle = () => setModal(!modal);
    const [updatedJob, setUpdatedJob] = useState(job.job)
    const [updatedPrice, setUpdatedPrice] = useState(job.price)
    const [updatedPrimeCost, setUpdatedPrimeCost] = useState(job.primeCost)
    const [updatedEmployee, setUpdatedEmployee] = useState(job.employee)

    const updateButtonHandler = (jobId, updatedJob, price, primeCost, employee) => {
        const service = {job: updatedJob, price, primeCost, employee};
        props.updateJob(jobId, service)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update client</ModalHeader>
                <ModalBody>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Service: </span>
                        <input
                            value={updatedJob}
                            onChange={(e) => setUpdatedJob(e.target.value)}
                            type="text" className="form-control" placeholder="service"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Price: </span>
                        <input
                            value={updatedPrice}
                            onChange={(e) => setUpdatedPrice(Number(e.target.value))}
                            type="text" className="form-control" placeholder="price"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Prime cost: </span>
                        <input
                            value={updatedPrimeCost}
                            onChange={(e) => setUpdatedPrimeCost(Number(e.target.value))}
                            type="text" className="form-control" placeholder="prime cost"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> Employee: </span>
                        <input
                            value={updatedEmployee}
                            onChange={(e) => setUpdatedEmployee(e.target.value)}
                            type="text" className="form-control" placeholder="employee"
                            aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => updateButtonHandler(job.id, updatedJob, updatedPrice, updatedPrimeCost, updatedEmployee)}
                        color="primary"> Update </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}