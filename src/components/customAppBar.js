import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { borderRadius } from '@mui/system';

const CustomAppBar = () => {
    return <AppBar position="static" color='transparent' elevation={0}>
        <Toolbar>
            <MonetizationOnSharpIcon fontSize="large" edge="start" sx={{ color: 'orange', mr: 1}} />
            <Typography variant="h6" fontWeight={'bold'} sx={{ flexGrow: 1 }}>
                 DE-LOTTERY
            </Typography>
            <Box sx={{ paddingLeft:1.5, paddingRight:1.5, paddingTop:0.5, paddingBottom:0.5, border: '1px solid lightgray', borderRadius: 15 }}>
                <FiberManualRecordIcon fontSize="small" sx={{ color: 'lightgreen', mr: 1, verticalAlign:"middle"}} />
                <Typography variant='h10' sx={{color:'gray'}} >
                    Rinkeby Test Network
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
}

export default CustomAppBar;