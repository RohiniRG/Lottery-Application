import { Typography } from '@mui/material';

const MoneyText = (props) => {
    return <div>
        <Typography variant='h4' align='center' paddingTop={2} fontWeight={'bold'}>
            {props.amount} ETH
        </Typography>
        <Typography fontSize={20} align='center' fontWeight={'regular'} color={'gray'}>
            {props.players} players are currently competing
        </Typography>
    </div>
}

export default MoneyText;
