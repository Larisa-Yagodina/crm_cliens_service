import React from 'react';
import {Table} from "reactstrap";
import OrderItem from "./OrderItem";
import CreateNewOrder from "./CreateNewOrder";


export default function OrdersList(props) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2> Orders </h2>
                    </div>
                    <div className="col createButton">
                        <CreateNewOrder createNewOrder={props.createNewOrder} clients={props.clients}
                                        services={props.job}/>
                    </div>
                </div>
            </div>
            <Table striped>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Payments</th>
                    <th>Debt</th>
                    <th>Create at</th>
                    <th>Statuses</th>
                    <th>Dates</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.orders.map(el => <OrderItem
                    key={el.id}
                    order={el}
                    deleteOrder={props.deleteOrder}
                    updateOrder={props.updateOrder}
                />)}

                </tbody>
            </Table>
        </div>
    )
}