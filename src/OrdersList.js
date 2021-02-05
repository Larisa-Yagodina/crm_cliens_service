import React from 'react';
import {Table} from "reactstrap";
import OrderItem from "./OrderItem";


export default function OrdersList(props) {

    return (
        <div>
        <h2> Orders </h2>
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
            {props.orders.map(el => <OrderItem key={el.id} order={el} />)}

            </tbody>
        </Table>
        </div>
    )
}