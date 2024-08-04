import React from 'react';

interface Props {
	title: string;
	description: string;
}

const Header = ({ title, description }: Props) => (
	<header className=' my-6 space-y-2 px-4 md:my-12'>
		<h1 className="font-extrabold font-mono text-primary text-xl md:text-4xl">{title}</h1>
		<p className="font-mono text-muted-foreground"> {description} </p>
	</header>
);

export default Header;
