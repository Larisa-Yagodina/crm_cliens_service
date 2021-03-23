import React from 'react';

export default function CompanyResultItem(props) {

    const {result} = props;

    return (
        <tr>
            <th>{result.job}</th>
            <td>{result.employee}</td>
            <td>{result.income - result.primeCost}</td>
            <td>{result.income}</td>
            <td>{result.primeCost}</td>
            <td>{result.paidSum}</td>
            <td>{result.clientsDebt}</td>
        </tr>
    )
}