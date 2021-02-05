import React from 'react';
import {Table} from "reactstrap";
import ClientItem from "./ClientItem";


export default function ClientsList(props) {

    return (
        <div>
            <h2> Clients </h2>
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Create at</th>
            </tr>
            </thead>

            <tbody>
            {props.clients.map(el => <ClientItem key={el.id} client={el} />)}

            </tbody>
        </Table>
        </div>
    )
}