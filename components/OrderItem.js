import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function OrderItem({ icon, title, description, price }) {
	return (
		<Flex width="100%" mb="4" p="2" rounded="md" bgColor="purple">
			<Box mr="4" p="4" rounded="md" bgColor="lightgray">
				{icon}
			</Box>
			<Flex direction="column">
				<Text fontSize="md" fontWeight="bold">
					{title}
				</Text>
				<Text fontSize="sm">{description}</Text>
				<Text fontSize="sm">${price}</Text>
			</Flex>
		</Flex>
	);
}
