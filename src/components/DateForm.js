import React from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const SelectorContainer = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 1% auto 0 5%;
;`

const DateSelector = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
;`




export default function DateForm(props) {
    function handleChange(date) {
        function convertDate(date = new date()) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if(month < 10) month = '0' + month;
            if(day < 10) day = '0' + day;
                return `${year}-${month}-${day}`;
        }
        props.setDate(convertDate(date));
    }  
    return (
        <SelectorContainer>
            <DateSelector>Select Date:<Datepicker
            selected = {new Date(props.date)}
            onChange = {handleChange} /> 
            </DateSelector>
        </SelectorContainer> 
    )
};

