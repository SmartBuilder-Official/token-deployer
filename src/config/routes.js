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
} from '../pages';

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
      path: '/smartsales',
      element: <SmartsalesLayout />,
      children: [
        { element: <Launchpad />, index: true },
        { path: 'upcoming', element: <Upcoming /> },
        { path: 'favourites', element: <Favourites /> }
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
