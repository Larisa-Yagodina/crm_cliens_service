import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default function ServiceDeleteModal(props) {

    const {modal, setModal, job} = props;
    const toggle = () => setModal(!modal);


    const deleteButtonHandler = (jobId) => {
        props.deleteJob(jobId)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you sure you want to delete?</ModalHeader>
                <ModalBody>
                    {job.job}
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={() => deleteButtonHandler(job.id)}
                        color="primary"> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}