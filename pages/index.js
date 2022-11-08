import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Content from '../components/Content';
import Information from '../components/Information';
import { IoBrushSharp } from 'react-icons/io5';
import { IoMdCart } from 'react-icons/io';
import { SiAseprite } from 'react-icons/si';
import { BsShop } from 'react-icons/bs';
import { FaFileContract } from 'react-icons/fa';
import ArtworkCreator from '../components/artwork-creator/app/ArtworkCreator';

export default function Home() {
	const [wizardData, setWizardData] = useState([]);

	const [shoppingCartData, setShoppingCartData] = useState([
		{
			name: 'Artwork Gen Package',
			description: 'Generate an entire NFT collection!',
			price: 300,
			icon: <IoBrushSharp size="30" color="black" />,
		},
		{
			name: 'Marketplace Package',
			description: 'Generate a customisable marketplace!',
			price: 500,
			icon: <IoMdCart size="30" color="black" />,
		},
	]);

	const [currentStep, setCurrentStep] = useState(1);

	const addItemToCart = (name, description, price, icon) => {
		setShoppingCartData([
			...shoppingCartData,
			{ name: name, description: description, price: price, icon: icon },
		]);
	};

	const changeItemPrice = (name, price) => {
		newShoppingCartData = shoppingCartData.map((elem) => {
			if (elem.name == name) {
				return { ...elem, price: price };
			} else {
				return elem;
			}
		});
		setShoppingCartData(newShoppingCartData);
	};

	const addWizardData = (data) => {
		setWizardData([...wizardData, data]);
	};

	const StepData = [
		{
			id: 1,
			name: 'Marketplace Creator',
			stepIcon: <BsShop size="5em" />,
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. With the release of Letraset.',
			app: '',
		},
		{
			id: 2,
			name: 'Artwork Creator',
			stepIcon: <SiAseprite size="5em" />,
			description:
				'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
			app: (
				<ArtworkCreator
					addItemToCart={addItemToCart}
					changeItemPrice={changeItemPrice}
					addWizardData={addWizardData}
				/>
			),
		},
		{
			id: 3,
			name: 'Contract Maker',
			stepIcon: <FaFileContract size="5em" />,
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. With the release of Letraset.',
			app: '',
		},
	];

	const currentApp = StepData.find((elem) => elem.id == currentStep).app;

	return (
		<Flex textColor="white" alignItems={'center'} alignContent={'center'}>
			<Information
				currentStep={currentStep}
				shoppingCartData={shoppingCartData}
				StepData={StepData}
			/>

			<Content
				setCurrentStep={setCurrentStep}
				currentStep={currentStep}
				addItemToCart={addItemToCart}
				currentApp={currentApp}
			/>
		</Flex>
	);
}
