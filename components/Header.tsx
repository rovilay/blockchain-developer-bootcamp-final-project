import React from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../utils/connectors"


const Header = () => {
  const { active, account, activate, deactivate } = useWeb3React()

  const connect = React.useCallback(async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }, [activate])

  const disconnect = React.useCallback(async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }, [deactivate])

  // React.useEffect(() => {
  //   console.log('here')
  //   const connectWalletOnPageLoad = async () => {
  //     if (localStorage?.getItem('isWalletConnected') !== 'true') {
  //       try {
  //         await connect()
  //         localStorage.setItem('isWalletConnected', 'true')
  //       } catch (ex) {
  //         console.log(ex)
  //       }
  //     }
  //   }
    
  //   connectWalletOnPageLoad()
  // }, [])

  return (
    <div className="flex items-center justify-between">
      <div className='truncate'>Account: { active ?  (<b>{account}</b>) : 'Not connected' }</div>
      <h1 className='bolder text-xl'>VOTI</h1>
      <button onClick={active ? disconnect : connect} className="py-2 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">{active ? 'Disconnect' : 'Connect to MetaMask'}</button>
    </div>
  )
}

export default Header;
