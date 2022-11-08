import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Content({ setCurrentStep }) {
	const handleNextClick = () => {
		setCurrentStep('Marketplace Creator');
	};
	const handlePreviousClick = () => {
		setCurrentStep('Artwork Creator');
	};

	return (
		<Flex
			direction="column"
			justify={'center'}
			align={'center'}
			height={'100vh'}
			backgroundColor="#3B3B3B"
			flexBasis="75%"
		>
			<Box
				display="flex"
				flexDirection="colomn"
				justifyContent="center"
				alignItems="center"
				backgroundColor="lightgray"
				rounded="lg"
				h="90%"
				w="95%"
			>
				<Text fontSize={'7xl'} color="black">
					ADD APP HERE
				</Text>
			</Box>
			<Box alignSelf="flex-start" display="flex">
				<Button
					backgroundColor="black"
					ml="9"
					mt="4"
					px="4"
					onClick={handleNextClick}
				>
					Next Step
				</Button>
				<Button
					backgroundColor="black"
					alignSelf="flex-start"
					ml="9"
					mt="4"
					px="4"
					onClick={handlePreviousClick}
				>
					Previous Step
				</Button>
			</Box>
		</Flex>
	);
}
