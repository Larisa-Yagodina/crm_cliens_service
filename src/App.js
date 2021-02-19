import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuidv4} from 'uuid';
import OrdersList from "./order/OrdersList";
import CompanyResult from "./results/CompanyResult";
import ClientsList from "./client/ClientsList";
import ServicesList from "./services/ServicesList";
import {Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import {getDate} from "./GetDate";


const initialOrders = [{
    id: uuidv4(),
    clientName: 'Bill Brown',
    service: {
        job: 'translation',
        employee: 'Greg',
        price: 100,
        primeCost: 20,
        createAt: '15.01.2021',
    },
    sentToDo: {
        date: '10.01.2021',
        status: true
    },
    completed: {
        date: "31.01.2021",
        status: true
    },
    sayToClient: {
        date: '',
        status: false
    },
    clientReceived: {
        date: '',
        status: false
    },
    paid: {
        payment: 50,
        debt: 50,
        date: '',
        status: false
    },
},
    {
        id: uuidv4(),
        clientName: 'Alice Smith',
        service: {
            job: 'consultation',
            employee: 'Bob',
            price: 200,
            primeCost: 50,
            createAt: '20.01.2021',
        },
        sentToDo: {
            date: '21.01.2021',
            status: true
        },
        completed: {
            date: '',
            status: false
        },
        sayToClient: {
            date: '',
            status: false
        },
        clientReceived: {
            date: '',
            status: false
        },
        paid: {
            payment: 170,
            debt: 30,
            date: '',
            status: false
        },
    },
]

const initialClients = [
    {id: uuidv4(), name: 'Bill Brown', address: 'New York', phoneNumber: '+198374928374', createAt: '15.01.2021'},
    {id: uuidv4(), name: 'Bob Smith', address: 'Chicago', phoneNumber: '+1987654321', createAt: '20.01.2021'},
]

const initialJob = [
    {id: uuidv4(), job: 'Translation', price: 100, primeCost: 20, employee: 'Greg'},
    {id: uuidv4(), job: 'Consultation', price: 200, primeCost: 50, employee: 'Bob'},
    {id: uuidv4(), job: 'Printout of documents', price: 50, primeCost: 5, employee: 'Rachel'}
]

function App() {

    const [orders, setOrders] = useState(initialOrders)
    const [clients, setClients] = useState(initialClients)
    const [services, setServices] = useState(initialJob)

    const createNewClient = (name, address, phoneNumber, create) => {
        const createAt = create === '' ? getDate() : create;
        const newClients = [...clients, {id: uuidv4(), name, address, phoneNumber, createAt}];
        setClients(newClients)
    }

    const createNewOrder = (clientName, job, prepaid) => {
        const service = services.filter(el => el.job === job);
        const paid = {
            payment: prepaid,
            debt: service[0].price - prepaid,
            date: service[0].price <= prepaid ? getDate() : null,
            status: (service[0].price <= prepaid),
        }
        const newOrders = [...orders, {
            id: uuidv4(),
            clientName,
            service: {...service[0], createAt: getDate()},
            sentToDo: {
                date: '',
                status: false
            },
            completed: {
                date: '',
                status: false
            },
            sayToClient: {
                date: '',
                status: false
            },
            clientReceived: {
                date: '',
                status: false
            },
            paid,
        }]
        setOrders(newOrders)
    }

    const [results, setResults] = useState([])

    const [activeTab, setActiveTab] = useState('orders');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const createNewJob = (job, price, primeCost, employee) => {
        const newServices = [...services, {id: uuidv4(), job, price, primeCost, employee}]
        setServices(newServices)
    }

    const updateClient = (clientId, client) => {
        const newClients = clients.map(el => {
            if (el.id === clientId) return {...el, ...client}
            return {...el};
        })
        setClients(newClients)
    }

    const updateJob = (jobId, job) => {
        const newJob = services.map(el => {
            if (el.id === jobId) return {...el, ...job}
            return {...el};
        })
        setServices(newJob)
    }

    const updateOrder = (orderId, order) => {
        const newOrder = orders.map(el => {
            if (el.id === orderId) return {...el, ...order}
            return {...el};
        })
        setOrders(newOrder)
    }

    console.log(orders)

    const deleteClient = (clientId) => {
        const newClients = clients.filter(el => el.id !== clientId)
        setClients(newClients)
    }

    const deleteJob = (jobId) => {
        const newJob = services.filter(el => el.id !== jobId)
        setServices(newJob)
    }

    const deleteOrder = (orderId) => {
        const newOrders = orders.filter(el => el.id !== orderId)
        setOrders(newOrders)
    }

    return (
        <div className='container'>
            <h1> Clients & Orders </h1>
            <hr/>
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === 'orders'})}
                            onClick={() => {
                                toggle('orders');
                            }}
                        >
                            Orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === 'clients'})}
                            onClick={() => {
                                toggle('clients');
                            }}
                        >
                            Clients
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === 'services'})}
                            onClick={() => {
                                toggle('services');
                            }}
                        >
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === 'results'})}
                            onClick={() => {
                                toggle('results');
                            }}
                        >
                            Company Results
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            {activeTab === 'orders' && <OrdersList
                orders={orders}
                job={services}
                createNewOrder={createNewOrder}
                clients={clients}
                deleteOrder={deleteOrder}
                updateOrder={updateOrder}
            />}
            {activeTab === 'clients' && <ClientsList
                updateClient={updateClient}
                clients={clients}
                createNewClient={createNewClient}
                deleteClient={deleteClient}
            />}
            {activeTab === 'services' && <ServicesList
                job={services}
                createNewJob={createNewJob}
                clients={clients}
                updateJob={updateJob}
                deleteJob={deleteJob}
            />}
            {activeTab === 'results' && <CompanyResult
                results={results}
                setResults={setResults}
                orders={orders}
                services={services}
            />}
        </div>
    );
}

export default App;