import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop({ layerData, setLayerData, currentLayer }) {
	const handleChange = (file) => {
		const newArr = Object.values(file).map((el) => {
			return { url: URL.createObjectURL(el), rarity: 50 };
		});

		setLayerData(
			layerData.map((elem) => {
				if (elem.name == currentLayer) {
					elem.images = elem.images.concat(newArr);
				}
				return elem;
			})
		);
	};
	return (
		<FileUploader
			handleChange={handleChange}
			name="file"
			types={fileTypes}
			multiple={true}
		/>
	);
}

export default DragDrop;
