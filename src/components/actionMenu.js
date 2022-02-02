import { Component } from "react";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

class ActionButtonMenu extends Component {
    state = {
        isOpen: false,
        menuElement: null,
    };

    handleClick = event => {
        this.setState({ isOpen: true, menuElement: event.currentTarget });
    };

    handleMenuClose = event => {
        this.setState({ isOpen: false, menuElement: null });
    };

    handleManagerClose = () => {
        window.open('https://rinkeby.etherscan.io/address/0x56709884751800A72370F8380671ec816AA4835A')
        this.setState({ isOpen: false, menuElement: null });
    };

    handleContractClose = () => {
        window.open('https://rinkeby.etherscan.io/address/0xD01D7296b29d31C300865469f356C634b9aDAFD5')
        this.setState({ isOpen: false, menuElement: null });
    };

    render() {
        return (
            <div className="Action-button" id="actions">
                <IconButton sx={{ color: 'black' }}
                    id="menu-button"
                    aria-controls={this.state.isOpen ? 'option-menu' : undefined}
                    aria-expanded={this.state.isOpen ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={this.state.menuElement}
                    open={this.state.isOpen}
                    onClose={this.handleMenuClose}
                    menulistprops={{
                        'aria-labelledby': 'menu-button',
                    }}
                >
                    <MenuItem onClick={this.handleManagerClose}>
                        <ListItemIcon>
                            <AdminPanelSettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Visit Manager Account</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={this.handleContractClose}>
                        <ListItemIcon>
                            <InfoIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>View Contract Details</ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}

export default ActionButtonMenu;
