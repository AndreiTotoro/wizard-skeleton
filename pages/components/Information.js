import { Box, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Description from './Description';
import ShoppingCart from './ShoppingCart';
import { SiAseprite } from 'react-icons/si';

export default function Information() {
	return (
		<VStack height="100vh" backgroundColor={'#222222'} flexBasis="25%">
			<Description
				StepIcon={<SiAseprite />}
				StepNumber={1}
				StepTitle={'Artwork Generator'}
				StepDescription={
					'Use our state of the art NFT Generator to kickstart your collection in minutes instead of weeks!'
				}
			/>
			<ShoppingCart />
		</VStack>
	);
}
