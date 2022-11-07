import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Content from './components/Content';
import Information from './components/Information';

export default function Home() {
	return (
		<Flex textColor="white" alignItems={'center'} alignContent={'center'}>
			<Information />

			<Content />
		</Flex>
	);
}
