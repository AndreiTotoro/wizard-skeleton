import React from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

export default function ImagePreview({
	layerData,
	currentLayer,
	setLayerData,
}) {
	const handleDelete = (img) => {
		setLayerData(
			layerData.map((elem) => {
				const newElem = {
					...elem,
					images: elem.images.filter((image) => {
						if (image.url == img) {
							return false;
						}
						return true;
					}),
				};
				return newElem;
			})
		);
	};

	return (
		<div>
			<p className="text-2xl pt-5">Preview uploaded images: </p>

			{layerData.map((layer, index) => {
				if (layer.images.length != 0 && layer.name == currentLayer) {
					return (
						<div
							className="flex flex-wrap bg-void p-4 pb-6 rounded-md"
							key={index}
						>
							{layer.images.map((img, index2) => {
								return (
									<div
										key={index2}
										className="bg-midnight drop-shadow-lg mt-4 rounded-md mx-2 flex flex-col justify-center"
									>
										<Image
											src={img.url}
											alt={'nothing'}
											width={200}
											height={200}
											className="basis-1/6 m-4"
										/>
										<div className="flex items-center mx-4 pb-4 text-lg justify-between">
											<p>{index2 + 1}</p>
											<FiX
												className="hover:cursor-pointer"
												onClick={() => handleDelete(img.url)}
											/>
										</div>
									</div>
								);
							})}
						</div>
					);
				}
			})}
		</div>
	);
}
