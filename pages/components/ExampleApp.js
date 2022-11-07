import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function ExampleApp() {
	return (
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
				APP
			</Text>
		</Box>
	);
}
