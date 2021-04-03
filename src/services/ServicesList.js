import React from 'react';
import {Button, Table} from "reactstrap";
import ServicesItem from "./ServicesItem";
import {useHistory} from "react-router-dom";

export default function ServicesList(props) {

    let history = useHistory();

    function goToCreateJob() {
        history.push("/services/create_job");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2> Job </h2>
                    </div>
                    <div className="col createButton">
                        <Button outline color="primary" onClick={goToCreateJob}> Create New Job </Button>
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