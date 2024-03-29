import { Box, Image, Img, List, ListItem, Switch, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sun from '../assets/sun.png';
import { SidebarItem } from '../constants/data';
import arrowDown from '../assets/arrow-down.png'
import { useState } from 'react';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)

  }

  return (
    <Box
      w="25%"
      position="fixed"
      h="100%"
      overflowY="auto"
      bg="white"
      top="26.6%"
      borderRight="1px"
      borderColor="rgba(0, 0, 0, 0.1);"
      pt="1rem"
      zIndex={2}
    >
      <List>
        {SidebarItem.map((item) => {
          if (item.hasOwnProperty('subCategory')) {
            return (
              <Box>
                <ListItem
                  pl="2rem"
                  pr="0.5rem"
                  display="flex"
                  alignItems="center"
                  flexWrap="wrap"
                  py="0.7rem"
                  onClick={showMenu}
                  cursor="pointer"
                >
                  <Image boxSize="18px" src={item.image} alt={item.name} />
                  <Text ml="2rem" color={item.path === pathname && 'white'}>
                    {item.name}
                  </Text>
                  <Img src={arrowDown} ml='1rem' alt='arrow-down' />
                </ListItem>

                <UnorderedList className={`${active ? 'd-block' : 'd-none'}`}>
                  {item.subCategory.map((item) => (
                    <NavLink key={item.id} to={item.path}>
                      <ListItem
                        pl="2rem"
                        pr="0.5rem"
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        py="0.7rem"
                        cursor="pointer"
                        bg={item.path === pathname && '#FC8B23'}
                      >
                        <Text
                          ml="2rem"
                          color={item.path === pathname && 'white'}
                        >
                          {item.name}
                        </Text>
                        <Text ml="auto" as="small" color="brand.primary">
                          {item.text}
                        </Text>
                      </ListItem>
                    </NavLink>
                  ))}
                </UnorderedList>
              </Box>
            );
          } else {
            return (
              <NavLink key={item.id} to={item.path}>
                <ListItem
                  pl="2rem"
                  pr="0.5rem"
                  display="flex"
                  alignItems="center"
                  flexWrap="wrap"
                  py="0.7rem"
                  cursor="pointer"
                  bg={item.path === pathname && '#FC8B23'}
                >
                  <Image boxSize="18px" src={item.image} alt={item.name} />
                  <Text ml="2rem" color={item.path === pathname && 'white'}>
                    {item.name}
                  </Text>
                  <Text ml="auto" as="small" color="brand.primary">
                    {item.text}
                  </Text>
                </ListItem>
              </NavLink>
            );
          }
        })}
      </List>

      <Box display="flex" mt="2rem" mb="2rem">
        <Image boxSize="20px" src={sun} alt="sun" />
        <Switch colorScheme="red" />
      </Box>
    </Box>
  );
};

export default Sidebar;
