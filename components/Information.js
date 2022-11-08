import { Box, Divider, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import ShoppingCart from './ShoppingCart';
import StepDescription from './StepDescription';

export default function Information({
	currentStep,
	shoppingCartData,
	StepData,
}) {
	const currentStepData = StepData.find((elem) => elem.id == currentStep);

	return (
		<VStack height="100vh" backgroundColor={'brand.primary'} flexBasis="25%">
			<StepDescription
				stepDescription={currentStepData.description}
				stepIcon={currentStepData.stepIcon}
				stepNumber={currentStepData.id}
				stepTitle={currentStepData.name}
			/>
			<Divider width="70%" borderColor="brand.accent" />
			<ShoppingCart shoppingCartData={shoppingCartData} />
		</VStack>
	);
}
