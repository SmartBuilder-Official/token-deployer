import { Box, Button, Img, Text } from '@chakra-ui/react';
import React from 'react';
import avatar from '../../assets/avatar.png';
import SocialIcons from '../../components/SocialIcons';
import Favourite from '../../components/Favourite';
import Notification from '../../components/Notification';


export const Cancelled = () => {
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
                            Cancelled
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box mt='57px'>
                <Box
                    bgColor='#D9D9D9'
                    w='100%'
                    h='24px'
                    borderRadius='10px'
                >
                    <Box
                        bgColor='#FC8B23'
                        w='138px'
                        h='24px'
                        borderRadius='10px'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Text
                            as="p"
                            fontWeight="400"
                            fontSize='16px'
                            lineHeight="19px"
                            color="#FFFFFF"
                            textAlign='center'
                        >
                            20%
                        </Text>
                    </Box>
                </Box>

            </Box>

            <Box
                mt='65px'
            >
                <Text
                    as="p"
                    fontWeight="500"
                    fontSize='20px'
                    lineHeight="19px"
                    color="#000000"
                    mb='50px'
                >
                    Project Details
                </Text>

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
                        Presale Supply
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
                        Swap rate
                    </Text>
                    <Text
                        as="p"
                        fontWeight="400"
                        fontSize='16px'
                        lineHeight="19px"
                        color="#000000"
                    >
                        100 ARCH / 1 coin
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
                        Initial market cap
                    </Text>
                    <Text
                        as="p"
                        fontWeight="400"
                        fontSize='16px'
                        lineHeight="19px"
                        color="#000000"
                    >
                        $5,000,000
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
                        Target raise
                    </Text>
                    <Text
                        as="p"
                        fontWeight="400"
                        fontSize='16px'
                        lineHeight="19px"
                        color="#000000"
                    >
                        $20,000,000
                    </Text>
                </Box>

                <Box as="hr"
                    height="2px"
                    borderRadius="10px"
                    my="20px"
                    bgColor="gray.200"
                />


            </Box>

            <Box my='36px' display="flex" alignItems="center" justifyContent="center">
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
                    Unavailable
                </Button>
            </Box>

            <Text
                as="p"
                fontWeight="700"
                fontSize='24px'
                lineHeight="19px"
                mb='69px'
                color="black"
                textAlign='center'
            >
                Payments are accepted in ARCH ,USDC(ARCH),USDT, BUIDL
            </Text>

        </Box>
    )
}
