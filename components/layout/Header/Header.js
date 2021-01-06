import { useState, Fragment } from 'react'
import { Menu, MenuItem, Button, Box, AppBar, Toolbar, Link, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '../../global'
import { Banner } from '../../homepage'
import Router from "next/router";


import { menuItems } from '../../../utils'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.background.default,
        marginBottom: "10px",
    },
    navbarItem: {
        backgroundColor: theme.palette.blue.main,
        color: theme.palette.background.default,
        marginRight: '15px',
        paddingLeft: '3em',
        paddingRight: '3em'
    }
}))
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [itemClicked, setItemClicked] = useState(null)
    const open = Boolean(anchorEl);

    console.log("anchorEl", anchorEl)

    const handleClick = (event, id) => {
        setAnchorEl(event.currentTarget);
        setItemClicked(id)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setItemClicked(null)
    };

    const handleClickSubItem = (subItem = {}) => {
        Router.push(subItem.link)
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={classes.navbar}>
            <Box pb={1} pt={1}>
                <Toolbar>
                    <Link href="/">
                        <Icon src="/static/icons/logo_mobin.jpg" />
                    </Link>
                    <div>
                        {
                            menuItems.map((item, index) => (
                                <Fragment key={index}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => {
                                        handleClick(event, item.id);
                                    }}
                                        className={classes.navbarItem}>
                                        {item.title}
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={itemClicked === item.id}
                                        onClose={handleClose}
                                    // TransitionComponent={Fade}
                                    >
                                        {
                                            item.subItems.map(subItem => (
                                                <MenuItem onClick={() => handleClickSubItem(subItem)}>{subItem.title}</MenuItem>
                                            ))
                                        }
                                    </Menu>
                                </Fragment>
                            ))
                        }

                    </div>
                    {/* <div style={{ display: 'flex' }}>
                    </div>
                    <Link href="/">
                        <Icon src="/static/icons/logo_mobin.jpg" />
                    </Link>
                    <Box ml={2}>
                        <Button
                            className={classes.navbarItem}
                            variant="contained"
                            onClick={handleClick}
                            aria-controls="fade-menu" aria-haspopup="true"
                        >
                            Nos Activités
                 </Button>
                        <Menu
                            id="fade-menu"
                            // anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                    <Box ml={2}>
                        <Button
                            className={classes.navbarItem}
                            variant="contained"
                        >
                            Nos Projets
                 </Button>
                    </Box>
                    <Box ml={2}>
                        <Button
                            className={classes.navbarItem}
                            variant="contained"
                        >
                            Notre Accompagnement
                 </Button>
                    </Box>
                    <Box ml={2}>
                        <Button
                            className={classes.navbarItem}
                            variant="contained"
                        >
                            Login
                 </Button>
                    </Box> */}
                </Toolbar>
            </Box>
            {/* <Banner /> */}
        </AppBar>
    )
}

export default Header