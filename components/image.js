import React from 'react';
import utilStyles from '../styles/utils.module.css';

const image = ({ image, imageAlt, title }) => {
  // const size = '/600x400';
  const size = '';

  return (
    <div className='styles.cardImage responsive'>
      <img
        src={image + size}
        className='img'
        onMouseOver={(e) => (e.currentTarget.src = imageAlt)}
        onMouseOut={(e) => (e.currentTarget.src = image + size)}
        alt={title}
        // sizes='(max-width: 800px) 100vw, 800px'
        loading='lazy'
      />
    </div>
  );
};

export default image;
