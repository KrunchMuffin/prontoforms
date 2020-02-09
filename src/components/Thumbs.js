import React from "react";
// import styled from 'styled-components';
import ThumbUp from '../images/thumbs-up-sign_1f44d.png';
import ThumbDown from '../images/thumbs-down-sign_1f44e.png';

// const Thumb = styled.img`
//   width: 25px;
//   height: 25px;
// `;

// .thumb::after{
//     content: "\00a0";
// }

function Thumbs(percent) {
    return (
        <img src={percent > 25 ? <ThumbUp/> : <ThumbDown/>} alt="Thumb"/>
    )
}

export default Thumbs
