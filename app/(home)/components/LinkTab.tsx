import React from 'react';

const LinkTab = () => (
  <div className="flex items-center mt-4 space-x-2 rounded-md text-wolgray">
    <div className="flex flex-wrap items-center justify-between w-4/5 pt-6 pb-16 mx-auto text-4xl lg:pb-0 lg:w-full">
      <a href="https://instagram.com/thewolmer" target="_blank" rel="noopener">
        {' '}
        <i className="transition duration-200 bx bxl-instagram text-wolgray hover:text-wolwhite"></i>
      </a>
      <a href="https://twitter.com/thewolmer" target="_blank" rel="noopener">
        {' '}
        <i className="transition duration-200 bx bxl-twitter text-wolgray hover:text-wolwhite"></i>{' '}
      </a>
      <a href="https://github.com/thewolmer" target="_blank" rel="noopener">
        {' '}
        <i className="transition duration-200 bx bxl-github text-wolgray hover:text-wolwhite"></i>{' '}
      </a>
      <a href="https://www.linkedin.com/in/thewolmer/" target="_blank" rel="noopener">
        {' '}
        <i className="transition duration-200 bx bxl-linkedin-square text-wolgray hover:text-wolwhite"></i>{' '}
      </a>
    </div>
  </div>
);

export default LinkTab;
