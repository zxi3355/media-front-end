import React from 'react';
import Sample from '../assets/sample-ad.jpg';
import './Advertisement.scss';

const Advertisement = () => {
  return (
    <div className='Advertisement'>
      <img className='Advertisement--image' src={Sample} alt='ad image' />
    </div>
  );
};

export default Advertisement;
