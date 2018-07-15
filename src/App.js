import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
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

  onSubmit = async (event) => {
    //prevent default
    event.preventDefault();

    //get list of accounts available
    const accounts = await web3.eth.getAccounts();

    //set state
    this.setState({message: 'Waiting for transaction to confirm...'})

    //enter into lottery
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({message: 'You have been entered into the lottery. Good luck!'})
    this.setState(this.state);
  };

  onClick = async () => {
    //get list of usable accounts in metamask
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to confirm...'})

    //pick winner
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({message: 'Round ended, and winner drawn!'});
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This lottery contract is managed by {this.state.manager}. <br></br><br></br>
        There are currently {this.state.players.length} players in this round. <br></br><br></br>
      Lottery pot: {web3.utils.fromWei(this.state.balance, 'ether')} ETH
        </p>
        <hr />
      <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ETH to enter:</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({value:event.target.value})}
            />
          </div>
          <button>Submit</button>
        </form>
        <br></br><br></br>
        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>End round!</button>
        <br></br><br></br>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
