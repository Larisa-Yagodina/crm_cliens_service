import {
    Switch,
    Route,
} from "react-router-dom";
import OrdersList from "../order/OrdersList";
import CompanyResult from "../results/CompanyResult";
import ClientsList from "../client/ClientsList";
import ServicesList from "../services/ServicesList";
import Home from "../home/Home";
import CreateNewClient from "../client/CreateNewClient";
import CreateNewJob from "../services/CreacteNewJob";
import CreateNewOrder from "../order/CreateNewOrder";

export default function SwitchRoutes (props) {


    return (
        <Switch>
            <Route path="/orders/create_order">
                <CreateNewOrder
                    createNewOrder={props.createNewOrder}
                    clients={props.clients}
                    services={props.job}
                />
            </Route>
            <Route path="/orders">
                <OrdersList
                    orders={props.orders}
                    job={props.services}
                    createNewOrder={props.createNewOrder}
                    clients={props.clients}
                    deleteOrder={props.deleteOrder}
                    updateOrder={props.updateOrder}
                />
            </Route>
            <Route path="/clients/create_client">
                <CreateNewClient createNewClient={props.createNewClient}/>
            </Route>
            <Route path="/clients">
                <ClientsList
                    updateClient={props.updateClient}
                    clients={props.clients}
                    createNewClient={props.createNewClient}
                    deleteClient={props.deleteClient}
                />
            </Route>
            <Route path="/services/create_job">
                <CreateNewJob createNewJob={props.createNewJob}/>
            </Route>
            <Route path="/services">
                <ServicesList
                    job={props.services}
                    createNewJob={props.createNewJob}
                    clients={props.clients}
                    updateJob={props.updateJob}
                    deleteJob={props.deleteJob}
                />
            </Route>
            <Route path="/results">
                <CompanyResult
                    countResults={props.countResults}
                    results={props.results}
                    setResults={props.setResults}
                    orders={props.orders}
                    services={props.services}
                />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}