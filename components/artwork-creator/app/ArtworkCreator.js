import React, { useState } from 'react';
import Empty from '../components/Empty';
import Placeholder from '../components/Placeholder';
import Layers from './Layers';
import Main from './Main';
import Settings from './Settings';

export default function ArtworkCreator() {
	const [currentLayer, setCurrentLayer] = useState('');
	const [layerData, setLayerData] = useState([
		{ name: 'Head', images: [], rarity: 50 },
		{ name: 'Torso', images: [], rarity: 50 },
		{ name: 'Legs', images: [], rarity: 50 },
	]);

	return (
		<div className="flex h-full w-full divide-gray-800">
			<div className="basis-1/5">
				<Layers
					currentLayer={currentLayer}
					setCurrentLayer={setCurrentLayer}
					layerData={layerData}
					setLayerData={setLayerData}
				/>
			</div>
			<div className="basis-3/5">
				{currentLayer == '' ? (
					<Placeholder />
				) : (
					<Main
						currentLayer={currentLayer}
						layerData={layerData}
						setLayerData={setLayerData}
					/>
				)}
			</div>
			<div className="basis-1/5">
				{currentLayer == '' ? (
					<Empty />
				) : (
					<Settings
						currentLayer={currentLayer}
						setCurrentLayer={setCurrentLayer}
						layerData={layerData}
						setLayerData={setLayerData}
					/>
				)}
			</div>
		</div>
	);
}
