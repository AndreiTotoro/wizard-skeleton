'use client';
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export default function LayerCreator({ layerData, setLayerData }) {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = () => {
		if (input == '') {
			alert("You can't have an empty imput!");
		} else {
			setLayerData([...layerData, { name: input, images: [], rarity: 50 }]);
			setInput('');
		}
	};

	const handleKeyPress = (e) => {
		if (e.key == 'Enter') {
			if (input == '') {
				alert("You can't have an empty imput!");
			} else {
				setLayerData([...layerData, { name: input, images: [], rarity: 50 }]);
				setInput('');
			}
		}
	};

	return (
		<div className="bg-void text-white  rounded-lg p-3 w-10/12 my-2 pl-2 flex justify-between">
			<input
				value={input}
				placeholder={'New Layer'}
				className="rounded-md py-1 pl-2 text-gray-500 w-11/12 bg-midnight"
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			/>
			<button onClick={handleSubmit}>
				<FiCheckCircle color="gray" />
			</button>
		</div>
	);
}
