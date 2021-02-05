import React, {useState} from 'react';
import CreateNewClient from "./CreateNewClient";
import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuidv4} from 'uuid';
import OrdersList from "./OrdersList";
import CompanyResult from "./CompanyResult";
import ClientsList from "./ClientsList";
import ServicesList from "./ServicesList";
import CreateNewJob from "./CreacteNewJob";
import CreateNewOrder from "./CreateNewOrder";

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
        date: '15.01.2021',
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
    paid: {
        prepaid: 50,
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
            prepaid: 170,
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

    const createNewClient = (name, address, phoneNumber, createAt) => {
        const newClients = [...clients, {id: uuidv4(), name, address, phoneNumber, createAt}];
        setClients(newClients)
    }

    const createNewOrder = (clientName, job, prepaid) => {
        console.log(job)
        const service = services.filter(el => el.job === job);
        console.log(service[0].price)
        const paid = {
            prepaid,
            debt: '',
            date: '',
            status: false
        }
        const newOrders = [...orders, {
            id: uuidv4(),
            clientName,
            service,
            sentToDo: {
                date: '',
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
            paid,
        }]
        setOrders(newOrders)
    }

    const [results, setResults] = useState([
        {
            id: uuidv4(),
            income: null,
            paidSum: null,
            clientDebt: null
        }
    ])

    const getResults = () => {
        // const income = orders.reduce((acc, curr) => acc + curr.service.price, 0);
        // const paidSum = orders.reduce((acc, curr) => acc + curr.paid.prepaid, 0);
        // const clientDebt = orders.reduce((acc, curr) => acc + curr.paid.debt, 0);
        const newResults = [{
            income: orders.reduce((acc, curr) => acc + curr.service.price, 0),
            paidSum: orders.reduce((acc, curr) => acc + curr.paid.prepaid, 0),
            clientDebt: orders.reduce((acc, curr) => acc + curr.paid.debt, 0),
        }]
        setResults(newResults)
    }

    const [openTable, setOpenTable] = useState(orders)

    const toggle = (value) => {
        setOpenTable(value)
    }

    const createNewJob = (job, price, primeCost, employee) => {

        const newServices = [...services, {id: uuidv4(), job, price, primeCost, employee}]
        setServices(newServices)
    }

    return (
        <div className='container'>
            <h1> Clients & Orders </h1>
            <CreateNewClient createNewClient={createNewClient}/>
            <CreateNewJob createNewJob={createNewJob}/>
            <CreateNewOrder createNewOrder={createNewOrder} clients={clients} services={services}/>
            <hr/>
            <button className="btn btn-outline-dark" size="sm" onClick={() => toggle('orders')}> Orders</button>
            {' '}
            <button className="btn btn-outline-dark" size="sm" onClick={() => toggle('clients')}> Clients</button>
            {' '}
            <button className="btn btn-outline-dark" size="sm" onClick={() => toggle('services')}> Job</button>
            {' '}
            <button className="btn btn-outline-dark" size="sm" onClick={() => toggle('results')}> Results</button>
            {' '}


            {openTable === 'orders' && <OrdersList orders={orders}/>}
            {openTable === 'clients' && <ClientsList clients={clients}/>}
            {openTable === 'services' && <ServicesList job={services}/>}
            {openTable === 'results' && <CompanyResult
                getResults={getResults}
                results={results}
            />}
        </div>
    );
}

export default App;