import React from 'react';
import {Table} from "reactstrap";
import ClientItem from "./ClientItem";
import CreateNewClient from "./CreateNewClient";
import '../App.css';


export default function ClientsList(props) {

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2> Clients </h2>
                    </div>
                    <div className="col createButton">
                        <CreateNewClient createNewClient={props.createNewClient}/>
                    </div>
                </div>
            </div>
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Create at</th>
                    <th> Actions</th>
                </tr>
                </thead>

                <tbody>
                {props.clients.map(el => <ClientItem
                    key={el.id}
                    client={el}
                    updateClient={props.updateClient}
                    deleteClient={props.deleteClient}
                />)}

                </tbody>
            </Table>
        </div>
    )
}