import './App.css';
import React, {useState} from 'react';
import {Web3} from "web3";

function App() {

    const [walletAddress, setWalletAddress] = useState("")

    async function requestAccount() {
        console.log('Requesting account...')

        if(window.ethereum) {
            console.log('Metamask Wallet Detected')
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0])
                Web3.eth.getBalance(walletAddress)
                }
            catch(error) {
                console.log("Error connecting Wallet")
        }
        }
        else {
            console.log('Metamask Wallet Absent')
        }
    }

    async function connectWallet(){
        if(typeof window.ethereum !== 'undefined') {
            console.log('Metamask Detected')
    }}

    return (
    <div className="App">
      <header className="App-header">
       <button

       onClick={requestAccount}

       >Connect Metamask Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
