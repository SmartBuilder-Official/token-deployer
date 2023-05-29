import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Box, Heading, Link } from '@chakra-ui/react';

const SmartsalesLayout = () => {
  const linkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '600' : '500',
    borderBottom: isActive ? '4px solid #FC8B23' : 'none',
  });

  const [display, setDisplay] = useState(false);
  const location = window.location.pathname;

  useEffect(() => {
    if (
      location === '/smartsales/launchpad' ||
      location === '/smartsales/upcoming' ||
      location === '/smartsales/favourites'
    ) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [location]);
  return (
    <>
      <Box className={display === true ? 'd-block' : 'd-none'}>
        <Heading
          as="h4"
          textAlign="center"
          fontSize="24px"
          fontWeight="700"
          lineHeight="36px"
          color="#000"
          mb="1rem"
        >
          Current presales
        </Heading>

        <Box display="flex" justifyContent="center" gap="56px">
          <Link
            as={NavLink}
            style={linkStyles}
            fontSize="18px"
            color="#000"
            py="0.7rem"
            to="/smartsales/launchpad"
            _hover={{ textDecoration: 'none' }}
          >
            All launchpads
          </Link>
          <Link
            as={NavLink}
            style={linkStyles}
            fontSize="18px"
            color="#000"
            py="0.7rem"
            to="/smartsales/upcoming"
            _hover={{ textDecoration: 'none' }}
          >
            Upcoming
          </Link>
          <Link
            as={NavLink}
            style={linkStyles}
            fontSize="18px"
            color="#000"
            py="0.7rem"
            to="/smartsales/favourites"
            _hover={{ textDecoration: 'none' }}
          >
            My favourites
          </Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default SmartsalesLayout;
