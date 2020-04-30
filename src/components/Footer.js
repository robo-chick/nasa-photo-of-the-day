import React from 'react';
import styled from 'styled-components';
import {GrLinkedin, GrFacebook, GrTwitter, GrGithub} from 'react-icons/gr';

const Copyright = styled.div`
margin-top: 1%;
;`

const LinkedIn = styled.a`
color: black;
margin-right: 1%;
;`

const Facebook = styled.a`
color: black;
margin-right: 1%;
;`

const Twitter = styled.a`
color: black;
margin-right: 1%;
;`

const Github = styled.a`
color: black;
;`

function Footer() {
    return (
    <div>
        <LinkedIn href='https://www.linkedin.com/in/tashahollingsworth/'><GrLinkedin /></LinkedIn>
        <Facebook href='https://www.facebook.com/tashawebdev/'><GrFacebook /></Facebook>
        <Twitter href='https://twitter.com/tasha_webdev/'><GrTwitter /></Twitter>
        <Github href='https://github.com/robo-chick'><GrGithub /></Github>
        <Copyright>
            Tasha Hollingsworth &copy;2020
        </Copyright>
    </div>
    )
}

export default Footer;