import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';


export default function PhotoCard() {
    const [photoData, setPhotoData] = useState({});;

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=LmfDH8HgWhALVaH6wCfx8TRk1BLpP7RLBawZglzC')
            .then(response => {
                console.log(response);
                setPhotoData(response.data);
            })

            .catch(error => {
                console.log('Photo data did not load', error)
            });
    }, []);

    return (
        <div class='card-container'>
          <div class='card-image'>
           <img src={photoData.url}/>
          </div>
        <CardInfo
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
        />
        </div>
    )
}