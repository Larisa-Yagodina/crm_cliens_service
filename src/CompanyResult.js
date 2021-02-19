import React, {useEffect} from 'react';
import {Table} from "reactstrap";
import CompanyResultItem from "./CompanyResultsItem";
import {v4 as uuidv4} from 'uuid';


export default function CompanyResult(props) {

    const {results, orders} = props;

    const getResults = () => {
        props.services.map(el => {
                const newResults = [...results, {
                    id: uuidv4(),
                    job: el.job,
                    income: orders.filter(el => el.service.job === el.job).reduce((acc, curr) => acc + curr.service.price, 0),
                    paidSum: orders.filter(el => el.service.job === el.job).reduce((acc, curr) => acc + curr.paid.prepaid, 0),
                    clientDebt: orders.filter(el => el.service.job === el.job).reduce((acc, curr) => acc + curr.paid.debt, 0),
                }]
                props.setResults(newResults)
            }
        )
    }

    useEffect(() => {
        console.log('was mount')
    }, [])

    useEffect(() => {
        return () => {
            console.log('destroyed')
        }
    }, [])

    return (
        <div>
            <h2> Company results </h2>
            <Table striped>
                <thead>
                <tr>
                    <th>Job</th>
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