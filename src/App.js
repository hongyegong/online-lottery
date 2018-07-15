import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: ''
  };

  async componentDidMount() {
    //figure out manager account for this contract
    const manager = await lottery.methods.manager().call();

    //get the list of players in this lottery round in contract
    const players = await lottery.methods.getPlayers().call();

    //get current contract balance
    const balance = await web3.eth.getBalance(lottery.options.address);

    //once data is retrieved, set state
    this.setState({manager, players, balance});
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This lottery contract is managed by {this.state.manager}. <br></br><br></br>
        There are currently {this.state.players.length} players in this round. <br></br><br></br>
      Lottery pot: {web3.utils.fromWei(this.state.balance, 'ether')} ETH
        </p>
      </div>
    );
  }
}

export default App;
