import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    }
}))
const Navbar = () => {
    const classes = useStyles();
    const [mobileMenuAnchorEl, setmobileMenuAnchorEl] = useState(null)
    const ismobileMenuOpen = Boolean(mobileMenuAnchorEl)

    const openMobileMenu = (event) => {
        setmobileMenuAnchorEl(event.currentTarget)
    }
    const closeMobileMenu = () => {
        setmobileMenuAnchorEl(null)
    }
    const movileMenu = (
        <Menu anchorEl={mobileMenuAnchorEl} id="mobile-menu" keepMounted open={ismobileMenuOpen}>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/">Home</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/about">About</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/contact">Contact</MenuItem>
        </Menu>
    )
    return (<>
        <AppBar color="secondary" position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Material UI
                </Typography>
                <Box className={classes.sectionDesktop}>
                    <Button component={Link} to="/">Home</Button>
                    <Button component={Link} to="/about">About</Button>
                    <Button component={Link} to="/contact">Contact</Button>
                    <Button>Cattagory</Button>
                </Box>
                <IconButton color="inherit" onClick={openMobileMenu} >
                    <MoreIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        {movileMenu}
    </>)
}
export default Navbar;
