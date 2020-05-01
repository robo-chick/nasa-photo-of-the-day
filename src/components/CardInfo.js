import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DateForm from './DateForm';
import {PhotoCard} from './PhotoCard';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import styled from 'styled-components';

  const CardContainer = styled.div`
  background: black;
  ;`

  const ImageContainer = styled.div`
  margin: 2%;
  ;`

  


export default function CardInfo() {
  const [photoData, setPhotoData] = useState([]);
  const [startDate, setStartDate] = useState('2020-04-30');

  useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=1mpVrJYvSeA5tgPmjJUds9CDPrhfmJ2GWnjYJqYE&date=${startDate}`)
        .then(response => {
            const photoData = response.data;
            console.log(`${photoData}`);
            setPhotoData(photoData);
        })
        .catch(error => 
            console.log(error));
  }, [startDate]);
  console.log(photoData);
  console.log(startDate);

    // return ( 
    //     <div>
    //         <DateForm date={date} setDate={setDate} />
    //         <PhotoCard photoData={photoData} />
    //     </div>
    // )

    return (        
      <CardContainer>
        <Card>
           <CardBody>
           <DateForm date={startDate} setDate={setStartDate} />
             <CardTitle>{photoData.title}</   CardTitle>
               <CardSubtitle>{photoData.copyright
                 ? `Copyright: ${photoData.copyright}` : null}
                </CardSubtitle>            
            </CardBody>
              <ImageContainer>
                <img width='85%'src={photoData.url} alt={photoData.title} />
              </ImageContainer>
            <CardBody>
                <CardText>{photoData.explanation}</CardText>
            </CardBody>
        </Card>
        </CardContainer>
    )
};