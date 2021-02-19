import React from 'react';
import {Table} from "reactstrap";
import ServicesItem from "./ServicesItem";
import CreateNewJob from "./CreacteNewJob";


export default function ServicesList(props) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2> Job </h2>
                    </div>
                    <div className="col createButton">
                        <CreateNewJob createNewJob={props.createNewJob}/>
                    </div>
                </div>
            </div>
            <Table striped>
                <thead>
                <tr>
                    <th>Name of job</th>
                    <th>Price</th>
                    <th>Employee</th>
                    <th>Prime cost</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {props.job.map(el => <ServicesItem
                    key={el.id}
                    job={el}
                    updateJob={props.updateJob}
                    deleteJob={props.deleteJob}
                />)}
                </tbody>
            </Table>
        </div>
    )
}