import React, {useEffect} from 'react';
import {Table} from "reactstrap";
import CompanyResultItem from "./CompanyResultsItem";

export default function CompanyResult(props) {

    useEffect(() => {
        props.getResults()
    }, [])


    return (
        <div>
            <h2> Company results </h2>
            <Table striped>
                <thead>
                <tr>
                    <th>Income</th>
                    <th>Paid sum</th>
                    <th>Client debt</th>
                </tr>
                </thead>
                <tbody>
                {props.results.map(el => <CompanyResultItem key={el.id} result={el} />)}
                </tbody>
            </Table>
        </div>
    )
}