import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function StepDescription({
	stepIcon,
	stepTitle,
	stepDescription,
	stepNumber,
}) {
	return (
		<VStack
			flexBasis="40%"
			justify={'center'}
			alignContent={'baseline'}
			alignItems={'baseline'}
			width="80%"
		>
			<Box alignSelf={'center'}>{stepIcon}</Box>
			<Text fontSize="xs" pt={'4'} color={'#B1B1B1'}>
				STEP {stepNumber}
			</Text>
			<Text as="u" fontSize={'xl'} fontWeight="bold">
				{stepTitle}
			</Text>
			<Text fontSize="sm">{stepDescription}</Text>
		</VStack>
	);
}
