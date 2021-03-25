import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuidv4} from 'uuid';
import OrdersList from "./order/OrdersList";
import CompanyResult from "./results/CompanyResult";
import ClientsList from "./client/ClientsList";
import ServicesList from "./services/ServicesList";
import {Nav, NavItem, NavLink} from 'reactstrap';
import {getDate} from "./additional/GetDate";
import loader from "./SVG_Loading/loading-spin.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home/Home";
import Links from "./routers/Links"


const initialOrders = [{
    orderNumber: 1,
    id: uuidv4(),
    clientName: 'Bill Brown',
    service: {
        job: 'Translation',
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
        primeCost: 20,
        date: '',
        status: false
    },
},
    {
        orderNumber: 2,
        id: uuidv4(),
        clientName: 'Alice Smith',
        service: {
            job: 'Consultation',
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
            primeCost: 50,
            date: '',
            status: false
        },
    },
]

const initialClients = [
    {id: uuidv4(), name: 'Bill Brown', address: 'New York', phoneNumber: '198374928374', createAt: '15.01.2021'},
    {id: uuidv4(), name: 'Bob Smith', address: 'Chicago', phoneNumber: '1987654321', createAt: '20.01.2021'},
]

const initialJob = [
    {id: uuidv4(), job: 'Translation', price: 100, primeCost: 20, employee: 'Greg'},
    {id: uuidv4(), job: 'Consultation', price: 200, primeCost: 50, employee: 'Bob'},
    {id: uuidv4(), job: 'Printout of documents', price: 50, primeCost: 5, employee: 'Rachel'}
]

function App() {

    const [serialOrderNumber, setSerialOrderNumber] = useState(3);
    const [orders, setOrders] = useState(initialOrders);
    const [clients, setClients] = useState(initialClients);
    const [services, setServices] = useState(initialJob);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            console.log('it`s for future. When I develop server, I`ll get data from BD and use isLoading')
        }, 1000)
        setIsLoading(false)
    }, [])

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
            primeCost: service[0].primeCost,
            date: service[0].price <= prepaid ? getDate() : null,
            status: (service[0].price <= prepaid),
        }
        const newOrders = [...orders, {
            orderNumber: serialOrderNumber,
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
        setSerialOrderNumber(serialOrderNumber + 1)
    }

    const [results, setResults] = useState([]);

    const countResults = () => {
        const jobs = services.map(el => el.job);
        let newResult = [...results];
        for (let job of jobs) {
            if (orders.filter(elm => elm.service.job === job).length !== 0) {
                const employee = services.filter(el => el.job === job)[0].employee;
                const income = orders.filter(elm => elm.service.job === job)
                    .reduce((acc, curr) => acc + curr.service.price, 0);
                const paidSum = orders.filter(elm => elm.service.job === job)
                    .reduce((acc, curr) => acc + curr.paid.payment, 0);
                const clientsDebt = orders.filter(elm => elm.service.job === job)
                    .reduce((acc, curr) => acc + curr.paid.debt, 0);
                const primeCost = orders.filter(elm => elm.service.job === job)
                    .reduce((acc, curr) => acc + curr.service.primeCost, 0);
                newResult = [...newResult,
                    {id: uuidv4(), job, employee, income, primeCost, paidSum, clientsDebt}]
            }
        }
        const finalIncome = newResult.reduce((acc, curr) => acc + curr.income, 0)
        const finalPaidSum = newResult.reduce((acc, curr) => acc + curr.paidSum, 0)
        const finalClientDebt = newResult.reduce((acc, curr) => acc + curr.clientsDebt, 0)
        const finalPrimeCost = newResult.reduce((acc, curr) => acc + curr.primeCost, 0)

        newResult = [...newResult, {
            id: uuidv4(),
            job: 'All services',
            employee: null,
            primeCost: finalPrimeCost,
            income: finalIncome,
            paidSum: finalPaidSum,
            clientsDebt: finalClientDebt
        }]
        setResults(newResult)
    }

    const createNewJob = (job, price, primeCost, employee) => {
        const newServices = [...services,
            {id: uuidv4(), job, price, primeCost, employee}]
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
        <Router>
            <div className='container'>
                <h1> Clients & Orders </h1>
                <hr/>
                {isLoading ? <img src={loader} width={200}/> : null}

                <div>
                    <Links />
                </div>

                

            </div>
        </Router>
    );
}

export default App;