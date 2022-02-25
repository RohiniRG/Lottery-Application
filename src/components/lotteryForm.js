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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class LotteryForm extends Component {
    state = {
        open: false,
        value: this.props.value,
        message: '',
        severity: "success"
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    onSubmit = async (event) => {
        event.preventDefault()
        try {
            const accounts = await web3.eth.getAccounts()
            this.setState({ message: 'Waiting for transaction success....', severity: "info" })
            this.handleOpen();

            if (parseInt(this.state.value) <= 0.11) {
                throw "insufficient entry"
            }
            await lottery.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })
            this.setState({ message: 'Transaction complete! You are now ready to compete!' , severity: "success"})
            this.handleOpen();
        } catch (e) {
            if (e === "insufficient entry") {
                this.setState({ message: "Minimum amount required is greater than 0.11ETH", severity: "error" })
            }
            else {
                this.setState({ message: 'Something went wrong! ', severity: "error" })
            }
            this.handleOpen();
        }

    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
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
                    <FormControl className="input-bar" sx={{ m: 1, width: "300px" }} variant="outlined">
                        <OutlinedInput
                            className="outlined-input-bar"
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
                            placeholder="Enter amount"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button
                        className="enter-button"
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
                    <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.severity} sx={{ width: '100%' }}>
                            {this.state.message}                            
                        </Alert>
                    </Snackbar>
                </Box>
            </form>
        );
    }
}

export default LotteryForm;
