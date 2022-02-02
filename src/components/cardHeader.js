import { Component } from "react";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ActionButtonMenu from "./actionMenu";
import { Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

class CustomCardHeader extends Component {
  state = {
    copied: false,
  }

  accountShortner = (address) => {
    return address.substr(0, 4) + "..." + address.substr(address.length - 4);
  };

  copyToClipboard = () => {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 1000);
    return navigator.clipboard.writeText(this.props.manager);
  }

  render() {
    return (
      <CardHeader style={{ alignItems: 'center' }}
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
        subheader={<span className="manager-address" style={{
          display: "flex", alignItems: 'center',
          flexWrap: 'wrap',
        }} >
          <Typography fontSize={'small'}>
            {this.accountShortner(this.props.manager)}
          </Typography>
          <Tooltip title={this.state.copied ? "Copied!" : "Copy to Clipboard"} arrow>
            <IconButton onClick={this.copyToClipboard}>
              <ContentCopyIcon style={{ fontSize: 15, padding: 0, }} />
            </IconButton>
          </Tooltip>
        </span>}
      />
    );
  }
}

export default CustomCardHeader;

