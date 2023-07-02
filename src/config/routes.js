import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  SmartTokenLayout,
  ErrorPage,
  SuccessfulPage,
  SmartsalesLayout,
} from '../components';
import {
  Home,
  StandardToken,
  DeflationaryToken,
  HyperDeflationaryToken,
  MintBurnToken,
  TokenHome,
  SmartBuidl,
  SmartMarketplace,
  SmartNFTs,
  SmartStaking,
  Launchpad,
  Upcoming,
  Favourites,
  ListToken,
} from '../pages';

import { Cancelled } from '../pages/smartsales/Cancelled';
import Ongoing from '../pages/smartsales/Ongoing';

export function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/smarttoken',
      element: <SmartTokenLayout />,
      children: [
        { element: <TokenHome />, index: true },
        { path: 'standardToken', element: <StandardToken /> },
        { path: 'deflationary', element: <DeflationaryToken /> },
        { path: 'hyperdeflationary', element: <HyperDeflationaryToken /> },
        { path: 'mintburn', element: <MintBurnToken /> },
        { path: 'error', element: <ErrorPage /> },
        { path: 'success', element: <SuccessfulPage /> },
      ],
    },
    {
      path: '/create-presale',
      element: <ListToken />,
    },
    {
      path: '/join-presale',
      element: <SmartsalesLayout />,
      children: [
        { element: <Launchpad />, index: true },
        { path: 'upcoming', element: <Upcoming /> },
        { path: 'favourites', element: <Favourites /> },
        { path: 'cancelled', element: <Cancelled /> },
        { path: 'ongoing', element: <Ongoing /> },
      ],
    },
    {
      path: '/smartbuidl',
      children: [
        { element: <SmartBuidl />, index: true },
        { path: 'smartnfts', element: <SmartNFTs /> },
        { path: 'smartmarket', element: <SmartMarketplace /> },
        { path: 'smartstaking', element: <SmartStaking /> },
        { path: 'error', element: <ErrorPage /> },
        { path: 'success', element: <SuccessfulPage /> },
      ],
    },
  ]);
}
