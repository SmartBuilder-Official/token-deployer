import { Box, Button, Container, Heading, Img } from '@chakra-ui/react';
import React from 'react';
import error from '../assets/Error.png';

const ErrorPage = () => {
  return (
    <Container>
      <Box mx="auto" pt='4rem'>
        <Img src={error} mx="auto" boxSize="250px" alt="error" />
        <Heading as="h6" fontSize="24px" my='1rem' textAlign="center" fontWeight="500">
          We are sorry , an error occurred !
        </Heading>
        <Box textAlign='center'>
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
};

export default ErrorPage;
