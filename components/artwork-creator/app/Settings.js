import React from 'react';
import ImageRarity from '../components/ImageRarity';
import LayerRarity from '../components/LayerRarity';

export default function Settings({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	const handleNameChange = (e) => {
		setLayerData(
			layerData.map((elem) => {
				if (elem.name == currentLayer) {
					elem.name = e.target.value;
				}
				return elem;
			})
		);
		setCurrentLayer(e.target.value);
	};
	return (
		<div className="h-full text-white pl-9 pt-5 gap-5 bg-gradient-to-b from-midnight to-void flex flex-col">
			<p className="font-bold text-3xl">Settings</p>
			<p className="text-2xl font-bold">Layer Name</p>
			<div className=" mr-16">
				<input
					type="text"
					value={currentLayer}
					onChange={handleNameChange}
					className="p-2 px-4 bg-void rounded-lg drop-shadow-lg"
				/>
			</div>
			<p className="text-2xl py-2 font-bold">Layer Rarity</p>
			<LayerRarity
				currentLayer={currentLayer}
				layerData={layerData}
				setLayerData={setLayerData}
			/>
			<p className="text-2xl py-2 font-bold">Image Rarity</p>
			{layerData.map((elem) => {
				if (elem.name == currentLayer) {
					return elem.images.map((ele, index) => {
						return (
							<ImageRarity
								key={index}
								name={`${elem.name}`}
								rarity={elem.images[index].rarity}
								layerData={layerData}
								setLayerData={setLayerData}
								index={index}
							/>
						);
					});
				}
			})}
		</div>
	);
}
