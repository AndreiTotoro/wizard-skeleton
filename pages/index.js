import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Content from '../components/Content';
import Information from '../components/Information';
import { IoBrushSharp } from 'react-icons/io5';
import { IoMdCart } from 'react-icons/io';

export default function Home() {
	const [currentStep, setCurrentStep] = useState(1);
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

	return (
		<Flex textColor="white" alignItems={'center'} alignContent={'center'}>
			<Information
				currentStep={currentStep}
				shoppingCartData={shoppingCartData}
			/>

			<Content setCurrentStep={setCurrentStep} currentStep={currentStep} />
		</Flex>
	);
}
