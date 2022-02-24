import { Typography } from "@mui/material";
import { Component } from "react";
import Box from '@mui/material/Box';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import web3 from '../web3';
import lottery from '../lottery';

class LotteryForm extends Component {
    state = {
        value: this.props.value
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
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

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Box py={2} sx={{ boxShadow: '0 4px 3px -3px #ffa500' }}>
                    <Typography letterSpacing={11} fontWeight="bold" variant="h5" align="center" color={'#ffa500'}>
                        COME TRY YOUR LUCK!
                    </Typography>
                </Box>
                <Box className="form-inputs"
                    p={4}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <FormControl className="input-bar" sx={{ m: 1, width: "300px",}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
                            placeholder="Enter amount"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button className="enter-button"
                        onClick={this.onSubmit}
                        style={{
                            backgroundColor: "#ffa500", 
                            color: "white",
                            height: "50px", 
                            width: "300px", 
                            fontSize: "20px", 
                            fontWeight: "bold", 
                            boxShadow: "0 4px 3px -3px #f2f3f4"
                        }} variant="contained">Enter!
                    </Button>
                </Box>
            </form>
        );
    }
}

export default LotteryForm;
