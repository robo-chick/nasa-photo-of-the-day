import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';


export default function PhotoCard() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=LmfDH8HgWhALVaH6wCfx8TRk1BLpP7RLBawZglzC')
        .then(response => {
            console.log(response.data);
            setPhotoData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
  }, []);

  return (
      <div className='card-container'>
          <div className='image-container'>
              <img src={photoData.url}/>
          </div>
          <div className='card-info'>
              title={photoData.title}
              date={photoData.date}
              explanation={photoData.explanation}
          </div>
      </div>
  )
}

