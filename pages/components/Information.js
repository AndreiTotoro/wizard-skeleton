import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Description from './Description';
import ShoppingCart from './ShoppingCart';

export default function Information() {
	return (
		<VStack height="100vh" backgroundColor={'#222222'} flexBasis="25%">
			<Description />
			<ShoppingCart />
		</VStack>
	);
}
