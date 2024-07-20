import React from 'react';
import { FaGolang } from 'react-icons/fa6';
import { RiVuejsFill } from 'react-icons/ri';
import {
	SiC,
	SiCplusplus,
	SiCsharp,
	SiCss3,
	SiGnubash,
	SiHtml5,
	SiJavascript,
	SiMarkdown,
	SiPython,
	SiTypescript,
} from 'react-icons/si';

export const getLanguageIcon = (language: string) => {
	switch (language) {
		case 'JavaScript':
			return <SiJavascript size={20} color=" #e8d44d" />;
		case 'TypeScript':
			return <SiTypescript size={20} color="#2f74c0" />;
		case 'Vue':
			return <RiVuejsFill size={24} color="#41b883" />;
		case 'HTML':
			return <SiHtml5 size={22} color="#dd4b25" />;
		case 'Python':
			return <SiPython size={26} color="#f5d85a" />;
		case 'CSS':
			return <SiCss3 size={22} color="#254bdf" />;
		case 'Go':
			return <FaGolang color="#00a9d2" size={32} />;
		case 'Shell':
			return <SiGnubash size={26} color="#89e051" />;
		case 'C':
			return <SiC size={26} color="#005697" />;
		case 'C++':
			return <SiCplusplus size={26} color="#005697" />;
		case 'C#':
			return <SiCsharp size={26} color="#005697" />;
		default:
			return '-';
	}
};
