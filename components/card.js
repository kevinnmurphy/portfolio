import React from 'react';
import { FaGithub, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import utilStyles from '../styles/utils.module.css';
import styles from './card.module.css';

const card = ({
  data: { title, description, image, imageAlt, linkF, linkB, linkD, stack },
}) => {
  const linkBase = 'https://github.com/kevinnmurphy/';
  return (
    <div className={styles.card}>
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
              <FaServer />
            </a>
            <a
              className='m-1 justify-end'
              href={linkD}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <p className='pt-3'>{description}</p>
        <small className={utilStyles.lightText}>{stack}</small>
      </div>
      <div className='styles.cardImage'>
        <img
          src={image}
          className='styles.cardImage responsive'
          onMouseOver={(e) => (e.currentTarget.src = imageAlt)}
          onMouseOut={(e) => (e.currentTarget.src = image)}
          alt={title}
        />
      </div>
    </div>
  );
};

export default card;
