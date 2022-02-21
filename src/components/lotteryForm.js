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
                    <FormControl sx={{ m: 1, width: "250px", enabledColor: "#ffa500", }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={this.state.value}
                            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
                            placeholder="Enter amount"
                        />
                    </FormControl>
                    <Button style={{backgroundColor: "#ffa500", width: "250px",}} variant="contained">Enter!</Button>
                </Box>

            </form>
        );
    }
}

export default LotteryForm;
