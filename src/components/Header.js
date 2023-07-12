import React, { useEffect, useState } from 'react';
// import * as nearAPI from 'near-api-js';
import { Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/Smart Builders Logo.png';
import brandName from '../assets/Smart Builders Logo text.png';
import archwayIcon from '../assets/archway.png';
// import connectors from '../utils/connectors'
import UAuth from '@uauth/js';
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { ArchwayClient } from '@archwayhq/arch3.js';
import chainInfo from '../sdk/web3/constantine.config';

const Header = () => {
  // unstoppable domain integration
  let isActive = false;
  const [udUser, setUdUser] = useState(null);
  const [accounts, setaccounts] = useState();
  // const [CosmWasmClient, setCosmWasmClient] = useState();
  // const [queryHandler, setqueryHandler] = useState();
  // const [gasPrice, setgasPrice] = useState();

  const [uDauth, setUDauth] = useState();

  useEffect(() => {
    // console.log(window.location);
    const uDauth = new UAuth({
      clientID: 'd33e635d-7c71-4e48-9376-5756cd2a018b',
      redirectUri: `${window.location.href}`,
      scope: 'openid wallet email',
    });
    setUDauth(uDauth);
  }, []);

  // Handle connector activation and update connection/error state
  const handleToggleConnect = async () => {
    if (udUser) {
      await uDauth.logout();
      window.location.reload();
    } else
      try {
        const authorization = await uDauth.loginWithPopup();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
  };

  useEffect(() => {
    if (uDauth !== undefined || udUser !== undefined) {
      try {
        uDauth
          .user()
          .then((user) => {
            setUdUser(user);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (err) {
        // console.log(err)
      }
    }
  }, [uDauth]);

  if (udUser) isActive = true;
  else isActive = false;

  // Archway integration  - Keplr wallet
  useEffect(() => {
    const connectToArchway = async () => {
      if (!window.getOfflineSigner || !window.keplr) {
        alert('Please install Keplr extension');
      } else {
        try {
          await window.keplr.experimentalSuggestChain(chainInfo);
          window.keplr.defaultOptions = { sign: { preferNoSetFee: true } };
        } catch (error) {
          alert('Failed to suggest the chain');
          console.error(error);
        }
      }
    };

    connectToArchway();
  }, []);

  const connectKeplrWallet = async () => {
    const chainId = chainInfo.chainId;
    await window.keplr.enable(chainId);

    const offlineSigner = window.keplr.getOfflineSigner(chainId);
    const signingClient = await SigningArchwayClient.connectWithSigner(
      chainInfo.rpc,
      offlineSigner
    );

    const accounts = await offlineSigner.getAccounts();
    // const destinationAddress = document.sendForm.recipient.value;

    console.log(signingClient);
    console.log(accounts);
    // console.log(destinationAddress);
  };

  const handleArchwayConnect = async () => {
    connectKeplrWallet();
    const client = await ArchwayClient.connect(
      'https://rpc.constantine.archway.tech'
    );
    const contractAddress =
      'archway1ce97k929shkfzp633edt34hhv3uaqlkgsu3j4xqwjlg2fmg8y5hsw4lewj';
    const msg = {
      get_count: {},
    };
    const { count } = await client.queryContractSmart(contractAddress, msg);
    console.log('Counter: ', count);

    const validators = await client.tmClient.validatorsAll();
    console.log(validators);
  };

  return (
    <Box
      as="header"
      w="100%"
      position="fixed"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="20%"
      p="1.5rem"
      bg="white"
      top="0"
      zIndex={2}
    >
      <Box display="flex" alignItems="center">
        <Image boxSize="40px" src={logo} alt="logo" />
        <Image ml="1rem" src={brandName} alt="brandName" />
      </Box>

      <Box display="flex" alignItems="center">
        <Image width={150} src={archwayIcon} alt="archwayIcon" />
        <Button
          ml="1.5rem"
          p="1.5rem"
          bg="brand.primary"
          color="white"
          borderRadius="15px"
          _hover={{
            bg: 'brand.primary',
            opacity: '0.8',
            color: 'black',
          }}
          onClick={handleArchwayConnect}
        >
          {accounts ? 'Disconnect Wallet' : 'Connect Wallet'}
        </Button>

        <Button
          ml="1.5rem"
          p="1.5rem"
          bg="brand.primary"
          color="white"
          borderRadius="15px"
          _hover={{
            bg: 'brand.primary',
            opacity: '0.8',
            color: 'black',
          }}
          onClick={handleToggleConnect}
        >
          {isActive ? 'Logout' : 'Login with Unstoppable'}
        </Button>
      </Box>
      <Box>
        <h3>Status -{udUser ? udUser.sub : ''}</h3>
      </Box>
    </Box>
  );
};

export default Header;

// passphrase: wreck paper grunt roast lonely join rail tourist double soldier name wise
// devcreed.testnet;
