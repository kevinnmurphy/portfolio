import React from 'react';
import { FaGithub, FaGitkraken, FaExternalLinkAlt } from 'react-icons/fa';
import utilStyles from '../styles/utils.module.css';

const card = ({ data: { title, description, image, linkF, linkB, linkD } }) => {
  const linkBase = 'https://github.com/kevinnmurphy/';
  return (
    <div className={utilStyles.card}>
      <div className='flex-row'>
        <div className='border-b flex justify-between'>
          <h2 className='font-semibold'>{title}</h2>
          <div className='flex justify-between'>
            <a
              className='m-1 justify-end'
              href={linkBase + linkF}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
            <a
              className='m-1 justify-end'
              href={linkBase + linkB}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGitkraken />
            </a>
            <a
              className='m-1 justify-end'
              href={linkBase + linkD}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <p className='pt-3'>{description}</p>
        <small className={utilStyles.lightText}>
          {/* <Date dateString={date} /> */}
        </small>
      </div>
      <div className='flex-col'>
        <img src={image} />
      </div>
    </div>
  );
};

export default card;
