import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/red-hat-display/400.css"
import "@fontsource/red-hat-display/600.css";
import "@fontsource/red-hat-display/700.css";
import "@fontsource/red-hat-display/800.css";
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css";
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import theme from '../styles/theme.chakra';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
