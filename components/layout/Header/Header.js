import { useState, Fragment, useContext } from 'react'
import clsx from 'clsx';

import { List, ListItem, Menu, MenuItem, Button, Box, AppBar, Toolbar, Link, SwipeableDrawer, IconButton, ListItemText, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon, Title, Text } from '../../global'
import Router from "next/router";
import { menuItems } from '../../../utils'
import AppContext from "../../../context/AppContext";

import { logout } from '../../../lib/auth'

const useStyles = makeStyles((theme) => ({
    menuDesktop: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        [theme.breakpoints.up('md')]: {
            display: "flex"
        },
    },
    menuMobile: {
        [theme.breakpoints.down('sm')]: {
            display: "flex"
        },
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
    },
    toolbar: {
        paddingTop: '1em',
        paddingBottom: '1em',
    },
    navbar: {
        backgroundColor: theme.palette.background.default,
        marginBottom: "10px",
        // "@media (min-width: 960px)": {
        //     position: "-webkit-sticky",
        //     position: "sticky",
        //     top: "0px"
        // }
    },
    navbarItem: {
        backgroundColor: theme.palette.blue.main,
        color: theme.palette.background.default,
        marginRight: '15px',
        paddingLeft: '3em',
        paddingRight: '3em',
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: '#000'
        }
    },
    list: {
        listStyleType: "disc",
        fontSize: "20px",
    },
    items: {
        display: "flex"
    },
    btn: {
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: '#000'
        }
    },
    iconBtn: {
        backgroundColor: theme.palette.orange.main,
        color: theme.palette.background.default,
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: '#000'
        }
    },
    list: {
        width: "100%",
    },
    fullList: {
        width: 'auto',
    },
}))
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchor, setAnchor] = useState('left')
    const [openCollapseId, setOpenCollapseId] = useState(null);
    const [itemClicked, setItemClicked] = useState(null)
    const open = Boolean(anchorEl);
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const { user, isAuthenticated } = useContext(AppContext);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleClick = (event, id) => {
        setAnchorEl(event.currentTarget);
        setItemClicked(id)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setItemClicked(null)
    };

    const handleClickSubItem = (subItem = {}) => {
        setAnchorEl(null);
        setItemClicked(null)
        Router.push(subItem.link)
    };
    const handleClickCollapse = id => {
        setOpenCollapseId(id)
    };

    const onLogin = () => Router.push("/login")
    const onLogout = async () => {
        await logout()
    }



    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                <Box style={{ flex: 1 }}>
                    <Link href="/" classes={classes.logo}>
                        <Icon src="/static/icons/logo_mobin.jpg" />
                    </Link>
                </Box>
                <div className={classes.menuDesktop}>
                    <Box className={classes.items} alignItems="center">

                        {
                            menuItems.map((item, index) => (
                                <Box key={index}>
                                    <Fragment>
                                        <Button
                                            aria-controls="simple-menu" aria-haspopup="true"
                                            // onClick={(event) => {
                                            //     handleClick(event, item.id);
                                            // }}
                                            onClick={(event) => {
                                                handleClick(event, item.id);
                                            }}
                                            className={classes.navbarItem}>
                                            {/* {item.title} */}
                                            {
                                                item.icon ?
                                                    <Icon
                                                        maxWidth="60px"
                                                        src={`/static/icons/${item.icon}.png`} />
                                                    :
                                                    <Title bold color="#fff" size="body2" content={item.title} />

                                            }
                                        </Button>
                                        <Menu
                                            className={classes.list}
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={itemClicked === item.id}
                                            onClose={handleClose}
                                        // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        // transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        >
                                            {
                                                item.subItems.map((subItem, index) => (
                                                    <MenuItem
                                                        key={index}
                                                    >
                                                        <Link href={subItem.link}>
                                                            <Title
                                                                listItem
                                                                listStyleType="disc"
                                                                listStylePosition="inside"
                                                                uppercase
                                                                bold
                                                                fontSize="12px"
                                                                letterspacing="1px"
                                                                color="black"
                                                                content={subItem.title} />
                                                        </Link>
                                                    </MenuItem>
                                                ))
                                            }
                                        </Menu>
                                    </Fragment>
                                </Box>
                            ))
                        }
                        {
                            isAuthenticated ? (
                                <Button
                                    variant="outlined"
                                    onClick={() => onLogout()}
                                    style={{ backgroundColor: 'transparent' }}>
                                    Déconnexion</Button>
                            ) : (
                                <Button
                                    onClick={() => onLogin()}
                                    style={{ backgroundColor: 'transparent' }}>
                                    <Icon src="/static/icons/P.Adhérent1.png" maxWidth="50px" />
                                </Button>
                            )
                        }

                    </Box>
                </div>
                <div className={classes.menuMobile}>
                    <Box alignItems="center">
                        <Fragment>
                            <IconButton
                                className={classes.iconBtn}
                                onClick={toggleDrawer("left", true)}><MenuIcon /></IconButton>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                <div
                                    className={clsx(classes.list, {
                                        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                                    })}
                                    role="presentation"
                                // onClick={toggleDrawer(anchor, false)}
                                // onKeyDown={toggleDrawer(anchor, false)}
                                >
                                    <List component="nav"
                                    >
                                        {
                                            menuItems.map((item, index) => (
                                                <Fragment key={index}>
                                                    <ListItem button onClick={() => handleClickCollapse(item.id)}>
                                                        <ListItemText>
                                                            <Title bold size="body1" content={item.title || ""} />
                                                        </ListItemText>
                                                        {openCollapseId === item.id ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItem>
                                                    <Collapse in={openCollapseId === item.id} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                            {
                                                                item.subItems.map((subItem, i) => (
                                                                    <ListItem
                                                                        key={i}
                                                                        button
                                                                        // onClick={() => Router.push(subItem.link)}
                                                                        className={classes.nested}>
                                                                        <Box pl={3}>
                                                                            <Link href={subItem.link}>
                                                                                <Text
                                                                                    bold
                                                                                    color="#2699b0"
                                                                                    size="body2"
                                                                                    uppercase>
                                                                                    {subItem.title || ""}
                                                                                </Text>
                                                                            </Link>

                                                                        </Box>
                                                                    </ListItem>
                                                                ))
                                                            }

                                                        </List>
                                                    </Collapse>
                                                </Fragment>
                                            ))
                                        }

                                    </List>
                                </div>

                            </SwipeableDrawer>
                        </Fragment>

                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header