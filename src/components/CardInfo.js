import React, {useState, useEffect} from 'react';


const CardInfo = ({title, date, explanation}) => {
    return (
        <div class='photo-container'>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
        </div>
    );
}

export default CardInfo;