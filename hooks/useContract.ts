import { useMemo } from "react"
import { AddressZero } from "@ethersproject/constants"
import { useWeb3React } from "@web3-react/core";
import { Contract, ContractInterface, ethers } from "ethers";

const useContract = (contractAddress: string, contractABI: ContractInterface) => {
  if (contractAddress === AddressZero) {
    throw Error(`Invalid 'contractAddress' parameter ${contractAddress}`);
  }

  const { library, account } = useWeb3React<ethers.providers.Web3Provider>();

  const signerOrProvider = account ? library?.getSigner(account).connectUnchecked() : library;

  return useMemo(() => {
    return new Contract(contractAddress, contractABI, signerOrProvider)

  }, [contractABI, contractAddress, signerOrProvider])
}

export default useContract;
