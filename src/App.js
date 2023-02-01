import { useState } from "react";
function App() {
  let [account, setAccount] = useState("");
  let [contractData, setContractData] = useState("");

  const { ethereum } = window;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined"){
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
  }
  }

  const connectContract = async () => {
    return;
  }
  const getData = async () => {
    return;
  }
  const changeData = async () => {
    return;
  }
  return (
    <div className="App">
          <button onClick={connectMetamask}>CONNECT TO METAMASK</button>
          <p>{account}</p>
          <button onClick={connectContract}>CONNECT TO CONTRACT</button><br/ > <br/ >
          <button onClick={changeData}>CHANGE DATA</button><br/ > <br/ >
          <button onClick={getData}>READ FROM CONTRACT</button>
          <p>{contractData}</p>
    </div>
  );
}
export default App;
