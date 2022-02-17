import { Typography } from "@mui/material";
import { Component } from "react";
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';


class LotteryForm extends Component {
    state = {
        value: "",
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Box py={2} sx={{boxShadow: '0 4px 3px -3px #ffa500'}}>
                    <Typography letterSpacing={11} fontWeight="bold" variant="h5" align="center" color={'#ffa500'}>
                        COME TRY YOUR LUCK!
                    </Typography>
                </Box>
                <div>
                    <label>
                        Amount of ether to enter:
                    </label>
                    <input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                    />
                </div>
                <button>Enter!</button>
            </form>
        );
    }
}

export default LotteryForm;
