import React from 'react';


const CardInfo = ({date, title, explanation, copyright}) => {
    return (
        <div className='container'>
            <h2>{date}</h2>
            <h2>{title}</h2>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    );
}




export default CardInfo;