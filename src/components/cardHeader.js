import { Component } from "react";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'

class CustomCardHeader extends Component {
  render() {
    return (
        <CardHeader 
        avatar={
            <Avatar sx={{ color: 'black', bgcolor: 'white', fontSize: 'large' }}>
              <PersonIcon />
            </Avatar>
          }
          action={
            <IconButton sx={{ color: 'black' }}>
              <MoreVertIcon/>
            </IconButton>
          }
          title="Lottery Manager"
          subheader={
            <a href="https://rinkeby.etherscan.io/address/0x56709884751800A72370F8380671ec816AA4835A">
              {this.props.manager}
            </a>}
        />
    );
  }
}

export default CustomCardHeader;

