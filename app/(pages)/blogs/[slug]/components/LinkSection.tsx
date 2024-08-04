'use client';
import { useState } from 'react';

const LinkSection = () => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	const shareOnWhatsApp = () => {
		const currentURL = encodeURIComponent(window.location.href);
		const whatsappShareURL = `https://wa.me/?text=${currentURL}`;
		window.open(whatsappShareURL, '_blank');
	};

	const shareOnTwitter = () => {
		const currentURL = encodeURIComponent(window.location.href);
		const twitterShareURL = `https://twitter.com/intent/tweet?url=${currentURL}`;
		window.open(twitterShareURL, '_blank');
	};

	return (
		<div className="-left-36 absolute h-full">
			<div className="sticky top-10 left-0 my-10 flex flex-col items-center justify-center space-y-5 rounded-full bg-active px-2 py-6 shadow-2xl">
				<div
					onClick={copyToClipboard}
					className="flex items-center justify-center rounded-full bg-wolblack px-2 py-2 drop-shadow-2xl transition active:ring-4 active:ring-cyan-500 "
				>
					<div className="flex items-center justify-center">
						{copied ? (
							<>{/* <i className='bx bx-check text-2xl text-wolgray' /> */}</>
						) : (
							<>{/* <i className='bx bx-link text-2xl text-wolgray' />{' '} */}</>
						)}
					</div>
				</div>
				<div
					onClick={shareOnWhatsApp}
					className="flex items-center justify-center rounded-full bg-wolblack px-2 py-2 drop-shadow-2xl transition active:ring-4 active:ring-cyan-500 "
				>
					<div className="flex items-center justify-center">
						{/* <i className='bx bxl-whatsapp text-2xl text-wolgray' /> */}
					</div>
				</div>
				<div
					onClick={shareOnTwitter}
					className="flex items-center justify-center rounded-full bg-wolblack px-2 py-2 drop-shadow-2xl transition active:ring-4 active:ring-cyan-500 "
				>
					<div className="flex items-center justify-center">
						{/* <i className='bx bxl-twitter text-2xl text-wolgray' /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LinkSection;
