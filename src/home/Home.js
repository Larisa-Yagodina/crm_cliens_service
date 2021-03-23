import loader from "../SVG_Loading/loading-spin.svg";
import React from "react";


export default function Home(){
    return (
        <div>
            <img src={loader} width={100}/>

            <h2> Home page </h2>
            <p>Happy to introduce you our App - CRM to count you clients, services and your profit.</p>
            <p>If you need help, please, let us know by email or phone call.</p>
            <p>Have a nice experience with this App.</p>
        </div>
    )
}