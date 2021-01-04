import React from 'react';
import { FaGithub, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import utilStyles from '../styles/utils.module.css';
import styles from './card.module.css';
import Image from './image';

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
              aria-label={`${title} Frontend`}
            >
              <FaGithub />
            </a>
            <a
              className='m-1 justify-end'
              href={linkBase + linkB}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${title} Backend`}
            >
              <FaServer />
            </a>
            <a
              className='m-1 justify-end'
              href={linkD}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${title} Live`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <p className='pt-3'>{description}</p>
        <small className={utilStyles.lightText}>{stack}</small>
      </div>
      <Image image={image} imageAlt={imageAlt} title={title} />
    </div>
  );
};

export default card;
