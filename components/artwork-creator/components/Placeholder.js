import React from 'react';
import Modal from 'react-modal';

export default function Placeholder() {
	return (
		<div className="h-full bg-gradient-to-b from-midnight to-void pt-96 p-4">
			<div className="bg-void rounded-lg text-2xl p-4  text-white ">
				<p>This is some placeholder text!</p>
				<p>
					Go ahead and select a layer or create one from the menu on the left!{' '}
				</p>
				<Modal />
			</div>
		</div>
	);
}
