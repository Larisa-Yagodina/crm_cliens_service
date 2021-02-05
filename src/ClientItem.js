import React from 'react';


export default function ClientItem(props) {

const { client } = props;

    return (
        <tr>
            <th scope="row">{client.name}</th>
            <td>{client.address}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.createAt}</td>
        </tr>
    )
}