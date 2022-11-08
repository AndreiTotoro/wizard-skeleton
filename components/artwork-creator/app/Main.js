import React from 'react';
import { FiX } from 'react-icons/fi';
import ImagePreview from '../components/ImagePreview';
import Upload from '../components/Upload';

export default function Main({ currentLayer, layerData, setLayerData }) {
	return (
		<div className="h-full bg-gradient-to-b text-sm from-midnight to-void pl-14 pr-14 text-white flex flex-col gap-7">
			<p className="font-bold text-3xl pt-5">
				You have selected: {currentLayer}
			</p>
			<div className="bg-candy rounded-md p-2 flex justify-between">
				<p className="drop-shadow-md text-void font-bold">
					Not sure where to start? Check out our intro video{' '}
					<a className="text-blue-500 underline" href="">
						here
					</a>
					.
				</p>
				<button>
					<FiX />
				</button>
			</div>
			<p>Upload your images below: </p>

			<Upload
				layerData={layerData}
				setLayerData={setLayerData}
				currentLayer={currentLayer}
			/>
			<ImagePreview
				layerData={layerData}
				currentLayer={currentLayer}
				setLayerData={setLayerData}
			/>
		</div>
	);
}
