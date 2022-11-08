'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import ModalNotification from './ModalNotification';

export default function Layer({
	name,
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
	provided,
}) {
	const [isRemoving, setIsRemoving] = useState(false);

	const handleSelection = () => {
		if (name == currentLayer) {
			setCurrentLayer('');
		} else {
			setCurrentLayer(name);
		}
	};

	const removeLayer = async (action) => {
		if (action) {
			await setCurrentLayer('');
			setLayerData(
				layerData.filter((layer) => {
					if (layer.name == name) {
						return false;
					}
					return true;
				})
			);
		}
		setIsRemoving(false);
	};

	const handleClick = () => {
		setIsRemoving(true);
	};

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			onClick={handleSelection}
			className={`flex justify-between text-sm drop-shadow-lg items-center bg-void ${
				currentLayer == name ? 'border-purple-900 border-2 font-bold' : ''
			} rounded-lg p-4 w-10/12 my-2 pl-6 text-white`}
		>
			<p>{name}</p>
			<FiX onClick={() => handleClick()} />
			<ModalNotification
				openNotification={isRemoving}
				callBack={removeLayer}
				text={'Do you really want to remove this layer?'}
				title={'Remove: ' + name}
				setCurrentLayer={setCurrentLayer}
			/>
		</div>
	);
}
