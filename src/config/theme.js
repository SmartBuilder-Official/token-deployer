import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#FC8B23',
    },
    gray: {
      100: '#F7F7F7',
      200: '#D9D9D9',
    },
    black: {
      100: '#000000',
      200: 'rgba(0, 0, 0, 0.7)',
    },
    blue: {
      100: '#0C24FF',
    },
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
});