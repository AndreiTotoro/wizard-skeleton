import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import ExampleApp from './ExampleApp';

export default function Content() {
	return (
		<Flex
			direction="column"
			justify={'center'}
			align={'center'}
			height={'100vh'}
			backgroundColor="#3B3B3B"
			flexBasis="75%"
		>
			<ExampleApp />
		</Flex>
	);
}
