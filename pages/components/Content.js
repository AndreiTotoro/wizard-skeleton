import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

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
			<Box
				display="flex"
				flexDirection="colomn"
				justifyContent="center"
				alignItems="center"
				backgroundColor="lightgray"
				rounded="lg"
				h="95%"
				w="95%"
			>
				<Text fontSize={'7xl'} color="black">
					ADD APP HERE
				</Text>
			</Box>
		</Flex>
	);
}
