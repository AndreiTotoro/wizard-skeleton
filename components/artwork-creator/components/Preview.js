import React from 'react';

export default function Preview({ addWizardData, layerData }) {
	return (
		<div
			className="bg-midnight text-white  rounded-lg p-1 w-10/12 my-6 pl-2 flex justify-between hover:cursor-pointer"
			onClick={() => {
				addWizardData(layerData);
			}}
		>
			<p className="p-2 text-xl">Export Data</p>
		</div>
	);
}
