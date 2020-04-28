import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';


const CardInfo = ({date, title, explanation}) => {
    return (
        <div class='card-info-container'>
            <h2>{date}</h2>
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
    );
}




export default CardInfo;