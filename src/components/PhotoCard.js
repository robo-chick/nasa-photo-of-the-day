import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components';

const CardContainer = styled.div`
background: #D3D3D3;
`;

 const SpaceImg = styled.img`
 width: 90%;
 height: 600px;
 margin: 5%;
 `;

const CardHeader = styled.div`
font-size: 2rem;
margin-top: 4%;
`;
    


export default function PhotoCard() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=1mpVrJYvSeA5tgPmjJUds9CDPrhfmJ2GWnjYJqYE')
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
            <CardContainer>
                <CardBody>
                    <CardHeader>
                    <CardTitle>{photoData.title}</CardTitle>
                     <CardSubtitle>{photoData.date}</CardSubtitle>
                     </CardHeader>
                </CardBody>
             <SpaceImg width="100%" src={photoData.url} alt='nasa photo of the day' />
                 <CardBody>
                    <CardText>{photoData.explanation}</CardText>
                 <CardText>Copyright: {photoData.copyright}</CardText>
                </CardBody>
                </CardContainer>
            </Card>
    )
}
