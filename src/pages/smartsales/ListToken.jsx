import { Box, Button, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BitcoinPana from '../../assets/Bitcoin-pana.png'

const ListToken = () => {
    const navigate = useNavigate();
  return (
    <Box>
      <Box
        w="60%"
        mx="auto"
        p="2rem"
        border="1px solid rgba(0, 0, 0, 0.3)"
        borderRadius="10px"
        textAlign="center"
      >
        <Img src={BitcoinPana} mx='auto' maxW='60%' alt="bitcoin-pana" />

        <Heading as="h6" color="rgba(0, 0, 0, 0.7)" my='0.5rem' lineHeight='36px' fontWeight="700">
          List your token with our launchpad
        </Heading>

        <Text as="p" color="rgba(0, 0, 0, 0.7)" fontSize='14px' lineHeight='24px' my='1rem'>
          Our no-code smart contract auto-deployer enables people create and
          deploy their dApps with ease.
        </Text>

        <Box display="flex" justifyContent="center">
          <Button
            bgColor="brand.primary"
            borderRadius='20px'
            p='10px 30px'
            onClick={() => navigate('/smartsales/launchpad')}
            color="#fff"
            _hover={{ opacity: '0.7' }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ListToken;
