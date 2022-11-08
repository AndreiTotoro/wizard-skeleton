import { Box, Divider, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Description from './StepDescription';
import ShoppingCart from './ShoppingCart';
import { SiAseprite } from 'react-icons/si';
import StepDescription from './StepDescription';

export default function Information({ currentStep }) {
	return (
		<VStack height="100vh" backgroundColor={'#222222'} flexBasis="25%">
			<StepDescription
				StepIcon={<SiAseprite size="10em" />}
				StepNumber={1}
				StepTitle={'Artwork Generator'}
				StepDescription={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset."
				}
			/>
			<Divider />
			<ShoppingCart />
		</VStack>
	);
}
