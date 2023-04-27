import React from 'react'
import { Box, Button, Container, Heading, Img } from '@chakra-ui/react';
import successful from '../assets/successful.png'

const SuccessfulPage = () => {
  return (
    <Container>
      <Box mx="auto" pt="4rem">
        <Img src={successful} mx="auto" boxSize="200px" alt="error" />
        <Heading as="h6" fontSize="24px" textAlign="center" my='1.5rem' fontWeight="500">
          Transaction was successful!
        </Heading>
        <Box textAlign="center">
          <Button
            mt="2rem"
            mx="auto"
            p="1.5rem"
            bg="brand.primary"
            color="white"
            borderRadius="15px"
            _hover={{
              bg: 'brand.primary',
              opacity: '0.8',
              color: 'black',
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default SuccessfulPage