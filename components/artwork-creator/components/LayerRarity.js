import React from 'react';

export default function LayerRarity({ layerData, currentLayer, setLayerData }) {
	const rarity = layerData.map((elem) => {
		if (elem.name == currentLayer) {
			return elem.rarity;
		}
	});

	const handleSliderChange = (e) => {
		setLayerData(
			layerData.map((elem) => {
				if (elem.name == currentLayer) {
					elem.rarity = e.target.value;
				}
				return elem;
			})
		);
	};

	return (
		<div className="flex items-center">
			<p className="p-2 bg-void rounded-md">{rarity}%</p>
			<input
				onChange={handleSliderChange}
				type="range"
				min="0"
				max="100"
				className="h-2 ml-4 basis-6/12 bg-void rounded-lg appearance-none cursor-pointer mr-16"
			/>
		</div>
	);
}
