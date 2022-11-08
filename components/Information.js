import { Box, Divider, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import ShoppingCart from './ShoppingCart';
import StepDescription from './StepDescription';
import { StepData } from '../data/StepData';

export default function Information({ currentStep, shoppingCartData }) {
	const currentStepData = StepData.find((elem) => elem.id == currentStep);

	return (
		<VStack height="100vh" backgroundColor={'#222222'} flexBasis="25%">
			<StepDescription
				stepDescription={currentStepData.description}
				stepIcon={currentStepData.stepIcon}
				stepNumber={currentStepData.id}
				stepTitle={currentStepData.name}
			/>
			<Divider width="70%" />
			<ShoppingCart shoppingCartData={shoppingCartData} />
		</VStack>
	);
}
