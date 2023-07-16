import React from 'react';

import { github, linkedin, spotify, twitter } from '@constant/global';
import { Link } from '@element/Link';

const LinkTab = () => (
  <div className="flex items-center mt-4 space-x-2 rounded-md text-wolgray">
    <div className="flex flex-wrap items-center justify-between w-4/5 pt-6 pb-16 mx-auto text-4xl lg:pb-0 lg:w-full">
      <Link href={`https://twitter.com/${twitter}`}>
        {' '}
        <i className="transition duration-200 bx bxl-twitter text-wolgray hover:text-wolwhite"></i>{' '}
      </Link>
      <Link href={`https://github.com/${github}`}>
        {' '}
        <i className="transition duration-200 bx bxl-github text-wolgray hover:text-wolwhite"></i>{' '}
      </Link>
      <Link href={`https://www.linkedin.com/in/${linkedin}/`}>
        {' '}
        <i className="transition duration-200 bx bxl-linkedin-square text-wolgray hover:text-wolwhite"></i>{' '}
      </Link>
      <Link href={`https://open.spotify.com/user/${spotify}`}>
        {' '}
        <i className="transition duration-200 bx bxl-spotify text-wolgray hover:text-wolwhite"></i>
      </Link>
    </div>
  </div>
);

export default LinkTab;
