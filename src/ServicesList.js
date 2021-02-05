import React from 'react';
import {Table} from "reactstrap";
import ServicesItem from "./ServicesItem";


export default function ServicesList(props) {

    return (
        <div>
            <h2> Job </h2>
            <Table striped>
                <thead>
                <tr>
                    <th>Name of job</th>
                    <th>Price</th>
                    <th>Employee</th>
                    <th>Prime cost</th>
                </tr>
                </thead>

                <tbody>
                {props.job.map(el => <ServicesItem key={el.id} job={el}/>)}
                </tbody>
            </Table>
        </div>
    )
}