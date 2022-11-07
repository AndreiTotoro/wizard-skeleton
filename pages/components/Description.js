import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Description({
	StageIcon,
	StageTitle,
	StageDescription,
	StepNumber,
}) {
	return (
		<VStack flexBasis="60%">
			{StageIcon}
			<Text>{StepNumber}</Text>
			<Text>{StageTitle}</Text>
			<Text>{StageDescription}</Text>
		</VStack>
	);
}
