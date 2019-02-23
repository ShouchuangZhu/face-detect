import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        
      </div>
    
  );
}

export default FaceRecognition;