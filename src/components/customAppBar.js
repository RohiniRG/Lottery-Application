import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CustomAppBar = () => {
    return <AppBar position="relative" color='transparent' elevation={0}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            <MonetizationOnSharpIcon fontSize="large" edge="start" sx={{ color: 'orange', mr: 0.5}} />
            <Typography className='app-name' variant="h6" fontWeight={'bold'} sx={{ flexGrow: 1 }}>
                 De-Lottery
            </Typography>
            <Box sx={{paddingLeft:1.5, paddingRight:1.5, paddingTop:0.5, paddingBottom:0.5, border: '1px solid gray', borderRadius: 15 }}>
                <FiberManualRecordIcon fontSize="xs" sx={{ color: '#08f26e', mr: 1, verticalAlign:"middle"}} />
                <Typography variant="caption" sx={{color:'gray'}} >
                    Rinkeby Test Network
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
}

export default CustomAppBar;