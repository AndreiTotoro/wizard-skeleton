import React from 'react';
import DragDrop from './DragDrop';

export default function Upload({ layerData, setLayerData, currentLayer }) {
	return (
		<div>
			<div className="self-center p-5 px-24 bg-void text-white border-4 border-void rounded-lg flex justify-center items-center flex-col">
				<p className="font-bold">Click or Drag below to upload files!</p>
				<p className="italic">
					image/png, image/gif, video/mp4, video/webm, Max size: 10MB
				</p>
				<div className="m-4">
					<DragDrop
						layerData={layerData}
						setLayerData={setLayerData}
						currentLayer={currentLayer}
					/>
				</div>
			</div>
		</div>
	);
}
