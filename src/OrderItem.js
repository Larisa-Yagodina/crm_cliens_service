import React, {useState} from 'react';
import { Label, Input } from 'reactstrap';


export default function OrderItem(props) {

    const {order} = props;

    return (
        <tr>
            <th scope="row">{order.clientName}</th>
            <td>{order.service.job}</td>
            <td>{order.service.price}</td>
            <td>{order.paid.prepaid}</td>
            <td>{order.paid.debt}</td>
            <td>{order.service.createAt}</td>
            <td>
                <div>
                    <Label check>
                        In progress

                    </Label> {order.sentToDo.date}
                </div>
                <div>
                    <Label check>
                        Job completed
                    </Label> {order.completed.date}
                </div>
                <div>
                    <Label check>
                        Say to client
                    </Label> {order.sayToClient.date}
                </div>

                <div>
                    <Label check>
                        Client received
                    </Label> {order.clientReceived.date}
                </div>

                <div>
                    <Label check>
                        Paid
                    </Label> {order.paid.date}
                </div>


            </td>

        </tr>
    )
}