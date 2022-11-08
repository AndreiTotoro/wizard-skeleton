import React from 'react';

export default function ImageRarity({
	name,
	rarity,
	layerData,
	setLayerData,
	index,
}) {
	const handleSliderChange = (e) => {
		setLayerData(
			layerData.map((elem) => {
				if (elem.name == name) {
					elem.images[index].rarity = e.target.value;
				}
				return elem;
			})
		);
	};

	return (
		<div className="flex items-center">
			<p className="p-2 bg-void rounded-md">{`${rarity}%`}</p>
			<p className="p-2 ml-4 bg-void text-xs rounded-md">
				{name} {index + 1}
			</p>
			<input
				type="range"
				min="0"
				max="100"
				className="h-2 ml-4 basis-4/12 bg-void rounded-lg appearance-none cursor-pointer mr-16"
				onChange={handleSliderChange}
			/>
		</div>
	);
}
