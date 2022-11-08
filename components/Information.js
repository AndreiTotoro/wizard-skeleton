import { Box, Divider, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Description from './StepDescription';
import ShoppingCart from './ShoppingCart';
import { SiAseprite } from 'react-icons/si';
import StepDescription from './StepDescription';
import { StepData } from '../data/StepData';

export default function Information({ currentStep }) {
	const currentStepData = StepData.find((elem) => elem.name == currentStep);

	return (
		<VStack height="100vh" backgroundColor={'#222222'} flexBasis="25%">
			<StepDescription
				stepDescription={currentStepData.description}
				stepIcon={currentStepData.stepIcon}
				stepNumber={currentStepData.id}
				stepTitle={currentStepData.name}
			/>
			<Divider />
			<ShoppingCart />
		</VStack>
	);
}
