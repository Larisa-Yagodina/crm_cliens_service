import React from 'react';

export default function ServicesItem(props) {

    const {job} = props;

    return (
        <tr>
            <th scope="row">{job.job}</th>
            <td>{job.price}</td>
            <td>{job.employee}</td>
            <td>{job.primeCost}</td>
        </tr>
    )
}