import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';


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

//   return (
//       <div className='card-container'>
//           <div className='image-container'>
//               <img src={photoData.url} alt='nasa photo of the day'/>
//           </div>
//           <CardInfo
//               date={photoData.date}
//               title={photoData.title}
//               explanation={photoData.explanation}
//           />
//       </div>
//   )
    return (
       
        <Card>
        <CardBody>
            <CardTitle>{photoData.title}</CardTitle>
            <CardSubtitle>{photoData.date}</CardSubtitle>
        </CardBody>
        <img width="100%" src={photoData.url} alt='nasa photo of the day' />
        <CardBody>
            <CardText>{photoData.explanation}</CardText>
        </CardBody>
        </Card>
   
    )
}
