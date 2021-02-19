import React from 'react';


export default function CompanyResultItem(props) {

    const { result } = props;

    return (
        <tr>
            <th scope="row">{result.job}</th>
            <th scope="row">{result.income}</th>
            <td>{result.paidSum}</td>
            <td>{result.clientDebt}</td>
        </tr>
    )
}