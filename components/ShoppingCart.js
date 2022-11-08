import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import OrderItem from './OrderItem';
import { IoBrushSharp } from 'react-icons/io5';

export default function ShoppingCart({ shoppingCartData }) {
	return (
		<Flex
			pt="30"
			alignSelf="flex-start"
			pl="45"
			flexDirection="column"
			flexBasis="60%"
			width="85%"
		>
			<Text pb={5} fontSize="sm">
				Order summary
			</Text>
			<Box>
				{shoppingCartData.map((elem, index) => {
					return (
						<OrderItem
							key={index}
							description={elem.description}
							icon={elem.icon}
							title={elem.name}
							price={elem.price}
						/>
					);
				})}
			</Box>
		</Flex>
	);
}
