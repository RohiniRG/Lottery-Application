import { Typography } from "@mui/material";
import { Component } from "react";
import Box from '@mui/material/Box';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

class LotteryForm extends Component {
    state = {
        value: "",
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Box py={2} sx={{ boxShadow: '0 4px 3px -3px #ffa500' }}>
                    <Typography letterSpacing={11} fontWeight="bold" variant="h5" align="center" color={'#ffa500'}>
                        COME TRY YOUR LUCK!
                    </Typography>
                </Box>
                <Box
                    p={4}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <FormControl sx={{ m: 1, width: "300px",}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
                            placeholder="Enter amount"
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button 
                        onClick={this.props.onSubmit}
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
