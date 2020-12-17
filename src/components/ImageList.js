import React from 'react';

const ImageList = (props) =>{

  return props.images.map(image => {
    return <img key={image.id} src={image.urls.regular} alt="saco"/>
  });
  
  
};

export default ImageList;