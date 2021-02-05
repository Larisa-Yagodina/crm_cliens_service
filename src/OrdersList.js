import React from 'react';
import {Table} from "reactstrap";
import OrderItem from "./OrderItem";
import CreateNewOrder from "./CreateNewOrder";

export default function OrdersList(props) {

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg">
                        <h2> Orders </h2>
                    </div>
                    <div className="col createButton">
                        <CreateNewOrder
                            createNewOrder={props.createNewOrder}
                            clients={props.clients}
                            services={props.services}
                        />
                    </div>
                </div>
            </div>
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Prepaid</th>
                    <th>Debt</th>
                    <th>Create at</th>
                    <th>Statuses</th>
                </tr>
                </thead>
                <tbody>
                {props.orders.map(el => <OrderItem key={el.id} order={el}/>)}
                </tbody>
            </Table>
        </div>
    )
}