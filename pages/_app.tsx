import React from 'react';
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from 'ethers';
import '../styles/index.css'

const getLibrary = (provider: any) => {
  return new ethers.providers.Web3Provider(provider);
}

const App = ({ Component, pageProps }: any) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default App;
