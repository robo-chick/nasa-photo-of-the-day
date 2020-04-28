import React, {useState, useEffect} from 'react';


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