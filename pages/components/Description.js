import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Description({
	StepIcon,
	StepTitle,
	StepDescription,
	StepNumber,
}) {
	return (
		<VStack flexBasis="60%">
			{StepIcon}
			<Text>{StepNumber}</Text>
			<Text>{StepTitle}</Text>
			<Text>{StepDescription}</Text>
		</VStack>
	);
}
