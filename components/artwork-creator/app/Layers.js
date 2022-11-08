import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Layer from '../components/Layer';
import LayerCreator from '../components/LayerCreator';
import LayerLoader from '../components/LayerLoader';
import Preview from '../components/Preview';
import dynamic from 'next/dynamic';

export default function Layers({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
	addWizardData,
}) {
	const onDragEnd = (droppedItem) => {
		if (!droppedItem.destination) return;
		let updatedList = [...layerData];
		const [reorderedLayer] = updatedList.splice(droppedItem.source.index, 1);
		updatedList.splice(droppedItem.destination.index, 0, reorderedLayer);
		setLayerData(updatedList);
	};
	return (
		<div className=" bg-gradient-to-b from-midnight to-void	  pl-4 pt-5 h-full">
			<p className="text-white font-bold text-3xl pb-3">Layers</p>
			<div className="flex flex-col justify-between min-h-1/10">
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="layerList">
						{(provided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<LayerLoader
									currentLayer={currentLayer}
									setCurrentLayer={setCurrentLayer}
									layerData={layerData}
									setLayerData={setLayerData}
								/>
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
				<LayerCreator layerData={layerData} setLayerData={setLayerData} />
			</div>
			<Preview addWizardData={addWizardData} layerData={layerData} />
		</div>
	);
}
