import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Layer from './Layer';

export default function LayerLoader({
	layerData,
	setCurrentLayer,
	setLayerData,
	currentLayer,
}) {
	return (
		<>
			{layerData.map((layer, index) => {
				return (
					<Draggable draggableId={layer.name} index={index} key={layer.name}>
						{(provided) => (
							<Layer
								currentLayer={currentLayer}
								name={layer.name}
								layerData={layerData}
								setLayerData={setLayerData}
								setCurrentLayer={setCurrentLayer}
								provided={provided}
							/>
						)}
					</Draggable>
				);
			})}
		</>
	);
}
