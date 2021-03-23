import React, {useState} from 'react';
import {ListGroupItem, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {getDate} from "../additional/GetDate";


export default function OrderUpdateModal(props) {

    const {modal, setModal, order} = props;
    const toggle = () => setModal(!modal);
    const [newPayment, setNewPayment] = useState(0)
    const [inProgress, setInProgress] = useState(order.sentToDo.status)
    const [jobCompleted, setJobCompleted] = useState(order.completed.status)
    const [sayToClient, setSayToClient] = useState(order.sayToClient.status)
    const [clientReceived, setClientReceived] = useState(order.clientReceived.status)

    const updateButtonHandler = () => {
        const currentPaid = order.paid.payment + newPayment;
        const currentDebt = order.paid.debt - newPayment;
        const statusIfPaid = order.service.price <= currentPaid;
        const dateIfPaid = statusIfPaid ? getDate() : '';
        const newOrder = {
            paid: {
                payment: currentPaid,
                debt: currentDebt,
                date: dateIfPaid,
                status: statusIfPaid
            },
            sentToDo: {
                date: inProgress && !order.sentToDo.date ? getDate() : order.sentToDo.date,
                status: inProgress,
            },
            completed: {
                date: jobCompleted && !order.completed.date ? getDate() : order.completed.date,
                status: jobCompleted
            },
            sayToClient: {
                date: sayToClient && !order.sayToClient.date ? getDate() : order.sayToClient.date,
                status: sayToClient
            },
            clientReceived: {
                date: clientReceived && !order.clientReceived.date ? getDate() : order.clientReceived.date,
                status: clientReceived
            },
        };
        props.updateOrder(order.id, newOrder)
        toggle()
        setNewPayment(0)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update client</ModalHeader>
                <ModalBody>
                    <ListGroupItem>Client name: {' '}<b>{order.clientName}</b></ListGroupItem>
                    <ListGroupItem>Service: {' '}<b>{order.service.job}</b></ListGroupItem>
                    <ListGroupItem>Price: {' '}<b>${order.service.price}</b></ListGroupItem>
                    <br/>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> New payment: </span>
                        <input
                            value={newPayment}
                            onChange={(e) => setNewPayment(Number(e.target.value))}
                            type="number" className="form-control" placeholder="new payment"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <ListGroupItem>
                        <Label check>
                            <Input
                                value={inProgress}
                                onChange={() => setInProgress(!inProgress)}
                                type="checkbox"
                                checked={inProgress}
                            />{' '}
                            In progress
                        </Label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Label check>
                            <Input
                                value={jobCompleted}
                                onChange={() => setJobCompleted(!jobCompleted)}
                                type="checkbox"
                                checked={jobCompleted}
                            />{' '}
                            Job completed
                        </Label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Label check>
                            <Input
                                value={sayToClient}
                                onChange={() => setSayToClient(!sayToClient)}
                                type="checkbox"
                                checked={sayToClient}
                            />{' '}
                            Say to client
                        </Label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Label check>
                            <Input
                                value={clientReceived}
                                onChange={() => setClientReceived(!clientReceived)}
                                type="checkbox"
                                checked={clientReceived}
                            />{' '}
                            Client received
                        </Label>
                    </ListGroupItem>
                    <ListGroupItem>
                        {order.paid.status ? 'Paid: ✓' : `Debt: $${order.paid.debt}`}
                    </ListGroupItem>

                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={updateButtonHandler}
                        color="primary"> Update </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}