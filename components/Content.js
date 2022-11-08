import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { FiGift } from 'react-icons/fi';

export default function Content({
	setCurrentStep,
	currentStep,
	addItemToCart,
	currentApp,
}) {
	const handleNextClick = () => {
		setCurrentStep(currentStep + 1);
	};
	const handlePreviousClick = () => {
		setCurrentStep(currentStep - 1);
	};

	const handleAddCartClick = () => {
		addItemToCart(
			'Placeholder Title',
			'Placeholder Description',
			'Placeholder price',
			<FiGift size="30" color="white" />
		);
	};

	return (
		<Flex
			direction="column"
			justify={'center'}
			align={'center'}
			height={'100vh'}
			backgroundColor="brand.secondary"
			flexBasis="75%"
		>
			<Box
				display="flex"
				flexDirection="colomn"
				justifyContent="center"
				alignItems="center"
				backgroundColor="brand.primary"
				rounded="lg"
				h="90%"
				w="95%"
			>
				{currentApp}
			</Box>
			<Box alignSelf="flex-start" display="flex">
				<Button
					backgroundColor="brand.accent"
					ml="9"
					mt="4"
					px="4"
					onClick={handleNextClick}
				>
					Next Step
				</Button>
				{currentStep == 1 ? (
					''
				) : (
					<Button
						backgroundColor="brand.accent"
						alignSelf="flex-start"
						ml="9"
						mt="4"
						px="4"
						onClick={handlePreviousClick}
					>
						Previous Step
					</Button>
				)}
				<Button
					backgroundColor="black"
					alignSelf="flex-start"
					ml="9"
					mt="4"
					px="4"
					onClick={handleAddCartClick}
				>
					Add test item to cart
				</Button>
			</Box>
		</Flex>
	);
}
