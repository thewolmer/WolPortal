import React from 'react';
import { MdError } from 'react-icons/md';
const ErrorComponent = ({
	content = 'Something Went Wrong',
	description = 'Oops, something broke! Please try again',
}: { content?: string; description?: string }) => (
	<section className="flex h-[80vh] justify-center">
		<div className="flex flex-col items-center justify-center space-y-5">
			<MdError className="h-10 w-10 text-destructive" />
			<div className="max-w-xl">
				<p className="text-center font-mono text-destructive text-xl">{content}</p>
				<p className="text-center text-muted-foreground"> {description}</p>
			</div>
		</div>
	</section>
);

export default ErrorComponent;
