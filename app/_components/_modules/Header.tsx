import React from 'react';

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => (
  <header className="px-4 my-12 space-y-2 ">
    <h1 className="text-4xl text-neutral-300">{title}</h1>
    <p className="text-neutral-500"> {description} </p>
  </header>
);

export default Header;
