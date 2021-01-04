import React from 'react';
import { FaGithub, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import utilStyles from '../styles/utils.module.css';
import styles from './card.module.css';

const card = ({
  data: { title, description, image, imageAlt, linkF, linkB, linkD, stack },
}) => {
  const linkBase = 'https://github.com/kevinnmurphy/';
  const size = '600x300';
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
              name='Frontend'
            >
              <FaGithub />
            </a>
            <a
              className='m-1 justify-end'
              href={linkBase + linkB}
              target='_blank'
              rel='noopener noreferrer'
              name='Backend'
            >
              <FaServer />
            </a>
            <a
              className='m-1 justify-end'
              href={linkD}
              target='_blank'
              rel='noopener noreferrer'
              name='Deploy'
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <p className='pt-3'>{description}</p>
        <small className={utilStyles.lightText}>{stack}</small>
      </div>
      <div className='styles.cardImage responsive'>
        <img
          src={image + size}
          className=''
          onMouseOver={(e) => (e.currentTarget.src = imageAlt)}
          onMouseOut={(e) => (e.currentTarget.src = image + size)}
          alt={title}
          // sizes='(max-width: 800px) 100vw, 800px'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default card;
