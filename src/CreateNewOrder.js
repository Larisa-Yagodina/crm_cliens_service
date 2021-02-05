import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CreateNewOrder(props){

    const { clients, services } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [name, setName] = useState(clients[0].name);
    const [newJob, setNewJob] = useState(services[0].job);
    const [price, setPrice] = useState(services[0].price);
    const [prepaid, setPrepaid] = useState(0);

    const updatePrice = () => {
        console.log(services)
        const newPrice = services.filter(el => el.job === newJob)[0].price;
        setPrice(newPrice)
    }

    useEffect(() => {
        updatePrice()
        }, [newJob])

    const saveButtonHandler = (name, newJob, price, prepaid) => {
        props.createNewOrder(name, newJob, price, prepaid)
        toggle()
        setName(clients[0].name)
        setNewJob(services[0].job)
        setPrice(services[0].price)
        setPrepaid(0)
    }

    return (
        <div>
            <Button outline color="info" onClick={toggle}> CreateNewOrder </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Create new order </ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Client: </label>
                        <select
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-select" id="inputGroupSelect01">
                            {clients.map(el => <option key={el.name + el.phoneNumber} value={el.name}>{el.name}</option>)}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Job: </label>
                        <select
                            value={newJob}
                            onChange={(e) => setNewJob(e.target.value)}
                            className="form-select" id="inputGroupSelect01">
                            {services.map(el => <option key={el.job + el.price} value={el.job}>{el.job}</option>)}
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price: </span>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number" className="form-control" placeholder="price"
                            aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Prepaid: </span>
                        <input
                            value={prepaid}
                            onChange={(e) => setPrepaid(e.target.value)}
                            type="number" className="form-control" placeholder="prepaid"
                            aria-describedby="basic-addon1"/>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => saveButtonHandler(name, newJob, price, prepaid)}> Save </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}
