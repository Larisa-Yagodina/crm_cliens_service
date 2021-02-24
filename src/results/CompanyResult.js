import React, {useEffect} from 'react';
import {Table} from "reactstrap";
import CompanyResultItem from "./CompanyResultsItem";

export default function CompanyResult(props) {

    const {results, setResults} = props;

    useEffect(() => {
        props.countResults()
    }, [])


    useEffect(() => {
        return () => {
            setResults([])
        }
    }, [])

    return (
        <div>
            <h2> Company results </h2>
            <Table striped>
                <thead>
                <tr>
                    <th>Job</th>
                    <th>Employee</th>
                    <th>Net Profit</th>
                    <th>Income</th>
                    <th>Prime Cost</th>
                    <th>Paid sum</th>
                    <th>Client debt</th>
                </tr>
                </thead>
                <tbody>
                {results.filter(el => el.job !== 'All services').map(el => <CompanyResultItem key={el.id}
                                                                                              result={el}/>)}
                </tbody>
                <tfoot>
                {results.filter(el => el.job === 'All services').map(el => <CompanyResultItem key={el.id}
                                                                                              result={el}/>)}
                </tfoot>

            </Table>
        </div>
    )
}