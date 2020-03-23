import React from 'react';
import './Picture.css';
const Picture = (props) => (
        <img src={props.imgSrc} onClick={() => props.onClick(props.pictureId)} alt="dog" style={{width: "80px", height: "80px"}}/>
        //props.imgSrc를 받아와서 이미지 소스를 보여주고 프롭스.온클릭해서 이미지를 클릭했을 때 실행이 되도록 한다. 
    );
    


export default Picture;