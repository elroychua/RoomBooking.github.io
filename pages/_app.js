import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";

function Website({ Component, pageProps }) {
  return (
    <StrictMode>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}
export default Website;
