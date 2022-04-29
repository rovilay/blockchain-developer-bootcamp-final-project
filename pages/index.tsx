import { AddressZero } from '@ethersproject/constants';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/Header"
import useContract from '../hooks/useContract'
import { votiABI, votiContractAddress } from '../utils/constants'

const Home = () => {
  const { active, account } = useWeb3React()
  const votiContract = useContract(votiContractAddress, votiABI)
  const [owner, setOwner] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [voter, setVoter] = useState(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const errorRef = useRef<HTMLParagraphElement>(null)

  const registerVoter = async () => {
    try {
      if (!active) return;
  
      const voter = await votiContract.registerVoter();

      if (voter && voter.id !== AddressZero) setIsRegistered(true);
    } catch (error: any) {
      console.log('Error:registerVoter: ', error)
      if (errorRef.current) errorRef.current.innerText = error.data.message
    }
  }

  const getVoter = async (address: string) => {
    if (!active) return;

    try {
      const voter = await votiContract.users(address);
      if (voter && voter.id !== AddressZero) setVoter(voter)
    } catch (error) {
      console.log('Error:getVoter: ', error)
    }
  }

  useEffect(() => {
    const getOwner = async () => {
      if (!active) return;

      try {
        const ownr = await votiContract.owner();
        setOwner(ownr);
        
      } catch (error) {
        console.log('Error:getOwner: ', error)
      }
    }

    getOwner()
  }, [active, votiContract, account])

  return (
    <div className='p-4'>
      <Header />
      <div>Contract Owner: {owner} </div>

      <div className="my-4">
        <p className="error text-red-400" ref={errorRef}></p>

        <button onClick={registerVoter} className="py-2 text-lg my-4 font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" disabled={isRegistered}>
          {isRegistered ? 'Registered!!! 🎉🥳🍾' : 'Register to Vote'}
        </button>
      </div>

      <div className='my-4'>
        <input type="text" name="" id="" ref={inputRef} className="input border mr-2" placeholder='user address'/>
        <button onClick={() => getVoter(inputRef?.current?.value || '')} className="py-2 text-lg my-4 font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" disabled={isRegistered && !inputRef?.current?.value}>
          Get User
        </button>
      </div>

      <div className='my-4'>
        {!!voter && JSON.stringify(voter)}
      </div>
    </div>
  )
}

export default Home;
