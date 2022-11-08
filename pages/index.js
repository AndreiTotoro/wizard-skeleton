import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Content from '../components/Content';
import Information from '../components/Information';

export default function Home() {
	const [currentStep, setCurrentStep] = useState('Artwork Generator');

	return (
		<Flex textColor="white" alignItems={'center'} alignContent={'center'}>
			<Information currentStep={currentStep} />

			<Content />
		</Flex>
	);
}
