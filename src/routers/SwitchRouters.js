import {Route, Switch} from "react-router-dom";
import OrdersList from "../order/OrdersList";
import ClientsList from "../client/ClientsList";
import ServicesList from "../services/ServicesList";
import CompanyResult from "../results/CompanyResult";
import Home from "../home/Home";

export default function SwitchRouter () {

    return (
        <Switch>
            <Route path="/orders">
                <OrdersList
                    orders={orders}
                    job={services}
                    createNewOrder={createNewOrder}
                    clients={clients}
                    deleteOrder={deleteOrder}
                    updateOrder={updateOrder}
                />
            </Route>
            <Route path="/clients">
                <ClientsList
                    updateClient={updateClient}
                    clients={clients}
                    createNewClient={createNewClient}
                    deleteClient={deleteClient}
                />
            </Route>
            <Route path="/services">
                <ServicesList
                    job={services}
                    createNewJob={createNewJob}
                    clients={clients}
                    updateJob={updateJob}
                    deleteJob={deleteJob}
                />
            </Route>
            <Route path="/results">
                <CompanyResult
                    countResults={countResults}
                    results={results}
                    setResults={setResults}
                    orders={orders}
                    services={services}
                />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
