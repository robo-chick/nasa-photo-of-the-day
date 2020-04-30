import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DateForm from './DateForm';
import {PhotoCard} from './PhotoCard';



export default function CardInfo() {
  const [photoData, setPhotoData] = useState([]);
  const [date, setDate] = useState('2020-04-30');

  useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=1mpVrJYvSeA5tgPmjJUds9CDPrhfmJ2GWnjYJqYE&date=${date}`)
        .then(response => {
            const photoData = response.data;
            console.log(`${photoData}`);
            setPhotoData(photoData);
        })
        .catch(error => 
            console.log(error));
  }, [date]);
  console.log(photoData);
  console.log(date);

    return ( 
        <div>
            <DateForm date={date} setDate={setDate} />
            <PhotoCard photoData={photoData} />
        </div>
    )
};