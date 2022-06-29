import Web3 from 'web3';
import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState();
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');


  useEffect(() => {
    loadAccounts();
  })

  //load balance every time there is a change with the account
  useEffect(() => {
    loadBalance();
  }, [account])

  //requests accounts from givenProvider OR Ganache localhost and set the account with the first value
  async function loadAccounts() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0])
  }

  // get network and balange of the account
  async function loadBalance() {
    const network = await web3.eth.net.getNetworkType();
    const balance = await web3.eth.getBalance(account);
    setNetwork(network);
    setBalance(balance);
  }


  return (
    <div className="App">
      <header className="App-header">
   
          Decentralized First App 
          <p>Your account : ({account})</p>
          <p>Your balance ({network}) :  {balance}</p>
              
      </header>
    </div>
  );
}

export default App;
