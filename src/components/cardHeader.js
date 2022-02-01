import { Component } from "react";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ActionButtonMenu from "./actionMenu";
import { Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

class CustomCardHeader extends Component {
  accountShortner = (address) => {
    return address.substr(0, 4) + "..." + address.substr(address.length - 4);
  };

  render() {
    return (
      <CardHeader
        avatar={
          < Avatar sx={{ color: 'black', bgcolor: 'white', fontSize: 'large' }}>
            <PersonIcon />
          </Avatar >
        }
        action={
          <ActionButtonMenu />
        }
        title={<Typography fontWeight={'bold'}>
          Lottery Manager
        </Typography>}
        subheader={ <span className="manager-address" style={{display:"flex"}}>
          <Typography fontSize={'small'}>
            {this.accountShortner(this.props.manager)}
          </Typography>
          <IconButton>
            <ContentCopyIcon fontSize='16' />
          </IconButton>
        </span> }
      />
    );
  }
}

export default CustomCardHeader;

