import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import OrderItem from './OrderItem';
import { IoBrushSharp } from 'react-icons/io5';

export default function ShoppingCart() {
	return (
		<Flex
			pt="30"
			alignSelf="flex-start"
			pl="45"
			flexDirection="column"
			flexBasis="40%"
			width="75%"
		>
			<Text pb={5} fontSize="sm">
				Order summary
			</Text>
			<OrderItem
				icon={<IoBrushSharp size="30" color="black" />}
				title={'Artwork Generator'}
				description="Generate an entire NFT collection!"
				price="300"
			/>
			<Divider mb="4" />
			<OrderItem
				icon={<IoBrushSharp size="30" color="black" />}
				title={'Artwork Generator'}
				description="Generate an entire NFT collection!"
				price="300"
			/>
		</Flex>
	);
}
