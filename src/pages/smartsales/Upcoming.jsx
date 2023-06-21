import { Box, Button, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import SocialIcons from '../../components/SocialIcons';
import Favourite from '../../components/Favourite';
import Notification from '../../components/Notification';


const Upcoming = () => {
  const navigate = useNavigate();

  return (
    <Box
      mt='64px'
    >
      <Box
        display="flex"
        justifyContent='space-between'
      >
        <Box
          display="flex"
          alignItems="end"
        >
          <Img height='121px' width='100px' src={avatar} alt="avatar" />
          <Box
            ml='19px'
          >
            <Text
              as="p"
              fontWeight="700"
              fontSize='24px'
              lineHeight="19px"
              mb='22.68px'
              color="black"
            >Tony Stark
            </Text>
            <SocialIcons />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems='center'
        >
          <Box
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="gray.200"
            w="30px"
            h="30px"
            cursor="pointer"
            mr='8px'
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
            mr='73px'
          >
            <Favourite />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              bgColor="brand.primary"
              color="#fff"
              px='79px'
              py='23px'
              fontWeight='500'
              fontSize="20px"
              borderRadius="10px"
              _hover={{ opacity: 0.7 }}
            >
              Upcoming
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        mt='110px'
      >
        {/* about  */}
        <Text
          as="p"
          fontWeight="500"
          fontSize='20px'
          lineHeight="19px"
          color="black"
          mb='20px'
        >
          About:
        </Text>
        {/* many long texts  */}
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
        <Text
          as="p"
          fontWeight="400"
          fontSize='16px'
          lineHeight="19px"
          color="black"
          mb='10px'
        >
          Tony stark is a decentralized token aimed at facilitating  e commerce by being a form of payment between traders and buyers.
        </Text>
      </Box>

      <Box
        mt='104px'
      >

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Presale Address
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#FC8B23"
          >
            0xChsdkaj32jsakAANIISJRJRH536JFHRJKKKJJJ
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Token Name
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Tony Stark
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Token Symbol
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            TST
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Token Decimals
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            19
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Token Address
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#FC8B23"
          >
            0xChsdkaj32jsakAANIISJRJRH536JFHRJKKKJJJ
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Total Supply
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            1,000,000,000 TST
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Tokens For Presale
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            1,000,000,000 TST
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Tokens For Liquidity
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            1,000,000,000 TST
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Soft Cap
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            10 ARCH
          </Text>

        </Box>
        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Presale Start Time
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            2023:06:04 15:01 WAT
          </Text>

        </Box>
        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Presale End Time
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            2023:06:04 15:01 WAT
          </Text>

        </Box>
        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Listing on
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            xyz
          </Text>

        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Liquidity percent
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            xyz
          </Text>
        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Text
            as="p"
            fontWeight="500"
            fontSize='20px'
            lineHeight="19px"
            color="#000000"
          >
            Liquidity Lockup Time
          </Text>
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            xyz
          </Text>
        </Box>

        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />


      </Box>

      <Box
        mt='100px'
        w='100%'
        py='28px'
        border='1px solid rgba(0, 0, 0, 0.2)'
        borderLeft='none'
        borderRight='none'
      >
        <Text
          as="p"
          fontWeight="500"
          fontSize='20px'
          lineHeight="19px"
          color="#000000"
        >
          Token Metrics:
        </Text>

        <Box
          display="flex"
          justifyContent='space-between'
          mt='20px'
        >
          <Box
            bgColor='#FD728F'
            w='232px'
            h='58px'
          />
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Presale 20%
          </Text>

        </Box>

        <Box
          display="flex"
          justifyContent='space-between'
          alignItems='center'
          mt='20px'
        >
          <Box
            bgColor='#049BFF'
            w='362px'
            h='58px'
          />
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Liquidity 20%
          </Text>

        </Box>

        <Box
          display="flex"
          justifyContent='space-between'
          alignItems='center'
          mt='20px'
        >
          <Box
            bgColor='#FDB704'
            w='443px'
            h='58px'
          />
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Exchange Listing 20%
          </Text>

        </Box>

        <Box
          display="flex"
          justifyContent='space-between'
          alignItems='center'
          mt='20px'
        >
          <Box
            bgColor='#26C7D6'
            w='267px'
            h='58px'
          />
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Staking Reward 20%
          </Text>

        </Box>

        <Box
          display="flex"
          justifyContent='space-between'
          alignItems='center'
          mt='20px'
        >
          <Box
            bgColor='#E4897B'
            w='346px'
            h='58px'
          />
          <Text
            as="p"
            fontWeight="400"
            fontSize='16px'
            lineHeight="19px"
            color="#000000"
          >
            Airdrop 20%
          </Text>

        </Box>
      </Box>

      <Box
        mt='36px'
        w='100%'
        py='28px'
        border='1px solid rgba(0, 0, 0, 0.2)'
        borderLeft='none'
        borderRight='none'
      >
        <Text
          as="p"
          fontWeight="500"
          fontSize='20px'
          lineHeight="19px"
          color="#000000"
          mb='43px'
        >
          Lock Rewards:
        </Text>

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              Amount:
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              200,000,000
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              500,000,000
            </Text>

          </Box>

          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              Unlock time (UTC)
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='20px'
            >
              2023 : 06 : 08   15:00
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              2023 : 06 : 08   15:00
            </Text>

          </Box>
        </Box>
        <Box as="hr"
          height="2px"
          borderRadius="10px"
          my="20px"
          bgColor="gray.200"
        />

        <Box
          display="flex"
          justifyContent='space-between'
        >
          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              Amount:
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              200,000,000
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              200,000,000
            </Text>

          </Box>

          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              Cycle:
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              20% each 7 days
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              50% each 14 days
            </Text>

          </Box>

          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              TGE
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              20%
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              50%
            </Text>

          </Box>

          <Box >
            <Text
              as="p"
              fontWeight="700"
              fontSize='20px'
              lineHeight="19px"
              color="#000000"
              mb='26px'
            >
              Unlock time (UTC)
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
              mb='20px'
            >
              2023 : 06 : 08   15:00
            </Text>
            <Text
              as="p"
              fontWeight="400"
              fontSize='16px'
              lineHeight="19px"
              color="#000000"
            >
              2023 : 06 : 08   15:00
            </Text>

          </Box>
        </Box>

      </Box>

      <Box my='122px' display="flex" alignItems="center" justifyContent="center">
        <Button
          bgColor="brand.primary"
          color="#fff"
          px='66px'
          py='22px'
          fontWeight='400'
          fontSize="24px"
          borderRadius="10px"
          _hover={{ opacity: 0.7 }}
        >
          Proceed
        </Button>
      </Box>
    </Box>
  )
}

export default Upcoming