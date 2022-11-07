import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function StepDescription({
	StepIcon,
	StepTitle,
	StepDescription,
	StepNumber,
}) {
	return (
		<VStack
			flexBasis="60%"
			justify={'center'}
			alignContent={'baseline'}
			alignItems={'baseline'}
			width="80%"
		>
			<Box alignSelf={'center'}>{StepIcon}</Box>
			<Text pt={'4'} color={'#B1B1B1'}>
				Step {StepNumber}
			</Text>
			<Text fontSize={'xl'} fontWeight="bold">
				{StepTitle}
			</Text>
			<Text fontSize="sm">{StepDescription}</Text>
		</VStack>
	);
}
