import React from 'react';
import Link from 'next/link';
import Social from './social';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='border-b-2 bg-gradient-to-r from-red-500 to-yellow-300'
    >
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex-1 flex items-center justify-start'>
            <div className='flex space-x-4'>
              <Link href='/#about'>
                <a>About</a>
              </Link>
              <Link
                href='/#projects'
                className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                <a>Projects</a>
              </Link>
              <Link
                href='/#blog'
                className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                <a>Blog</a>
              </Link>
              <a
                href='https://www.dropbox.com/s/np9mynict9nhank/KevinMurphyResume.pdf?dl=0'
                target='_blank'
                rel='noopener noreferrer'
                name='Resume'
              >
                Resume
              </a>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
