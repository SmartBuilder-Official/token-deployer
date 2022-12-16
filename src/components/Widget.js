import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Tokens } from '../constants/data';

const Widget = () => {
  return (
    <Box
      borderTop="1px"
      borderBottom="1px"
      borderColor="rgba(0, 0, 0, 0.3);"
      px="1.5rem"
      py="0.5rem"
    >
      <Box display="flex" color="black" alignItems="center" flexWrap='wrap' justifyContent='space-evenly'>
        <Box>Trending</Box>

          {Tokens.map((token) => (
            <Box key={token.id} ml="1rem">
              <Text color="black" as="span">
                #{token.id}
              </Text>
              <Text color="brand.primary" ml="0.5rem" as="span">
                {token.name}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default Widget