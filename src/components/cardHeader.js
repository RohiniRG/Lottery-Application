import { Component } from "react";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

class CustomCardHeader extends Component {
  render() {
    return (
        <CardHeader
        avatar={
            <Avatar sx={{ color: 'black', bgcolor: 'white', fontSize: 'large' }}>
              <PersonIcon />
            </Avatar>
          }
          title="Lottery Manager"
          subheader={this.state.manager}
        />
    );
  }
}

export default CustomCardHeader;

