import React from 'react';
import {Button, Table} from "reactstrap";
import OrderItem from "./OrderItem";
import CreateNewOrder from "./CreateNewOrder";
import {useHistory} from "react-router-dom";

export default function OrdersList(props) {

    let history = useHistory();

    const goToCreateOrder = () => {
        history.push("/orders/create_order");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2> Orders </h2>
                    </div>
                    <div className="col createButton">
                        <Button outline color="primary" onClick={goToCreateOrder}> CreateNewOrder </Button>
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