import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  return (
    <div>
      <a
        className='inline-flex p-1'
        href='https://github.com/kevinnmurphy'
        target='_blank'
        rel='noopener noreferrer'
        name='Github'
      >
        <FaGithub />
      </a>
      <a
        className='inline-flex p-1'
        href='https://linkedin.com/in/kevinnmurphy'
        target='_blank'
        rel='noopener noreferrer'
        name='LinkedIn'
      >
        <FaLinkedin />
      </a>
      <a
        className='inline-flex p-1'
        href='mailto:kevinnealmurphy@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        name='Gmail'
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Social;
