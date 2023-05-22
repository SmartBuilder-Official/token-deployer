import React from 'react';
import avatar from '../../assets/avatar.png';
import { smartsalesLaunchpad } from '../../constants/data';
import { Box, Button, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import Notification from '../../components/Notification';
import Favourite from '../../components/Favourite';

const Launchpad = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" columnGap="20px" rowGap='40px' mt="2rem">
      {smartsalesLaunchpad.map((item) => (
        <GridItem
          key={item.id}
          border="1px solid rgba(0, 0, 0, 0.2)"
          bgColor="#fff"
          borderRadius="10px"
          py="1rem"
          fontSize="13px"
          px="0.5rem"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Img src={avatar} alt="avatar" />

            <Box>
              <Box
                bgColor="brand.primary"
                borderRadius="10px"
                p="10px"
                color="#fff"
                mb="0.5rem"
              >
                {item.status}
              </Box>
              <Box
                bgColor="blue.100"
                w="fit-content"
                borderRadius="10px"
                p="10px"
                color="#fff"
              >
                {item.kyc}
              </Box>
            </Box>
          </Box>
          <Text
            as="p"
            fontWeight="600"
            my="0.5rem"
            lineHeight="19px"
            color="black.100"
          >
            {item.name}
          </Text>
          <Text as="p" color="black.200">
            1 Arch = 1,000000 Tony Stark
          </Text>
          <Text
            as="p"
            fontWeight="600"
            lineHeight="19px"
            my="0.3rem"
            color="black.100"
          >
            Soft/Hard
          </Text>
          <Text as="p" color="blue.100">
            30 BNB - 60 BNB
          </Text>
          <Text as="p" fontWeight="600" my="0.3rem" color="black.100">
            Progress ( 0.00 %)
          </Text>
          <Box
            as="hr"
            height="5px"
            borderRadius="10px"
            my="0.5rem"
            bgColor="gray.200"
          />
          <Box
            display="flex"
            my="0.3rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>0 ARCH</Box>

            <Box>100 ARCH</Box>
          </Box>
          <Box
            display="flex"
            my="0.3rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>Liquidity %</Box>

            <Box>100%</Box>
          </Box>
          <Box
            display="flex"
            my="0.3rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>Lockup time</Box>

            <Box>365 days</Box>
          </Box>
          <Box
            as="hr"
            height="2px"
            borderRadius="10px"
            my="0.5rem"
            bgColor="gray.200"
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box fontSize="13px">
              <Text as="p">Sale Starts in :</Text>
              <Text as="p">06 : 08 : 56 :04</Text>
            </Box>

            <Box
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="gray.200"
              w="30px"
              h="30px"
              cursor="pointer"
            >
              <Notification />
            </Box>

            <Box
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="gray.200"
              w="30px"
              h="30px"
              cursor="pointer"
            >
              <Favourite />
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                bgColor="brand.primary"
                color="#fff"
                fontSize="13px"
                borderRadius="20px"
                _hover={{ opacity: 0.7 }}
              >
                View
              </Button>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Launchpad;
