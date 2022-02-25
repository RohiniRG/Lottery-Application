import './App.css';
import web3 from './web3';
import { Typography } from "@mui/material";
import { Component } from 'react';
import lottery from './lottery';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from "@mui/material/GlobalStyles";
import Box from '@mui/material/Box';
import CustomAppBar from './components/customAppBar';
import Card from '@mui/material/Card';
import CustomCardHeader from './components/cardHeader';
import EthLogo from './components/ethLogo';
import MoneyText from './components/moneyText';
import LotteryForm from './components/lotteryForm';
import Button from '@mui/material/Button';

class App extends Component {
  state = {
    manager: '',
    isManagerDisplay: false,
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.getPlayers().call()
    const balance = await web3.eth.getBalance(lottery.options.address)
    const currentAccount = await web3.eth.getAccounts();
    if (currentAccount[0] === manager) {
      this.setState({ isManagerDisplay: true })
    };
    this.setState({ manager, balance, players })
  }

  onClick = async (event) => {
    const accounts = await web3.eth.getAccounts()
    this.setState({ message: 'Waiting for transaction success....' })

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })
    this.setState({ message: 'Transaction complete! Game over! We have a winner!!!' })
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <GlobalStyles
          styles={{
            alignItems: 'center',
            body: { backgroundColor: "#f2f3f4" }
          }}
        />
        <Container component="main" maxWidth="md" >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              shadow: '0 0 3px -3px #ffa500',
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
                <LotteryForm onSubmit={this.onSubmit} value={this.state.value} />
              </div>
              {
                this.state.isManagerDisplay ?
                  <>
                  <hr color='orange' />
                    <Box py={2} >
                      <Typography letterSpacing={10} fontWeight="bold" variant="h5" align="center" color={'#ffa500'}>
                        READY TO PICK A WINNER?
                      </Typography>
                    </Box>
                    <Box className="form-inputs"
                      pb={4}
                      pt={0}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Button
                        className="enter-button"
                        onClick={this.onClick}
                        style={{
                          backgroundColor: "#ffa500",
                          color: "white",
                          height: "50px",
                          width: "300px",
                          fontSize: "20px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 3px -3px #f2f3f4"
                        }} variant="contained">Pick a winner
                      </Button>
                    </Box>

                  </> : <></>
              }
              <h2>{this.state.message}</h2>
            </Card>
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
