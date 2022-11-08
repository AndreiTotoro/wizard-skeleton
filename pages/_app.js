import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';

const theme = extendTheme({
	colors: {
		brand: {
			primary: '#1C1C27',
			secondary: '#28293D',
			accent: '#394C80',
		},
	},
	styles: {
		global: {
			'html, body': {
				backgroundColor: '#222222',
			},
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			{' '}
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
