import './App.css';
import web3 from './web3';
import { Component } from 'react';
import lottery from './lottery';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CustomAppBar from './components/customAppBar';
import Card from '@mui/material/Card';
import CustomCardHeader from './components/cardHeader';
import EthLogo from './components/ethLogo';
import MoneyText from './components/moneyText';
import LotteryForm from './components/lotteryForm';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call()
    const balance = await web3.eth.getBalance(lottery.options.address)
    this.setState({ manager, balance, players })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const accounts = await web3.eth.getAccounts()
    this.setState({ message: 'Waiting for transaction success....' })

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    })
    this.setState({ message: 'Transaction complete! You are now ready to compete!' })
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts()
    this.setState({ message: 'Waiting for transaction success....' })

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })
    this.setState({ message: 'Transaction complete! Game over! We have a winner!!!' })
  }

  render() {
    return (
      <Container component="main" maxWidth="md" >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CustomAppBar />
          <Card >
            <CustomCardHeader manager={this.state.manager} />
            <hr color='lightgray' />
            <div style={{ padding: "15px" }}>
              <EthLogo />
              <MoneyText amount={web3.utils.fromWei(this.state.balance, 'ether')} players={this.state.players.length} />
            </div>
            <div>
              <LotteryForm />
            </div>
            <hr />
            <h2>Wanna pick a winner?</h2>
            <button onClick={this.onClick}>Pick a winner!</button>
            <hr />
            <h2>{this.state.message}</h2>
          </Card>
        </Box>
      </Container>
    );
  }
}

export default App;
