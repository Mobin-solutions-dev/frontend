import { useState, Fragment } from 'react'
import { Menu, MenuItem, Button, Box, AppBar, Toolbar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Title } from '../../global'
import Router from "next/router";


import { menuItems } from '../../../utils'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingTop: '1em',
        paddingBottom: '1em',
    },
    navbar: {
        backgroundColor: theme.palette.background.default,
        marginBottom: "10px",
    },
    navbarItem: {
        backgroundColor: theme.palette.blue.main,
        color: theme.palette.background.default,
        marginRight: '15px',
        paddingLeft: '3em',
        paddingRight: '3em',
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
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
            // color: '#FFF'
        }
    }
}))
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [itemClicked, setItemClicked] = useState(null)
    const open = Boolean(anchorEl);

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

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                <Box style={{ flex: 1 }}>
                    <Link href="/" classes={classes.logo}>
                        <Icon src="/static/icons/logo_mobin.jpg" />
                    </Link>
                </Box>
                <div>
                    <Box className={classes.items} alignItems="center">

                        {
                            menuItems.map((item, index) => (
                                <Box key={index}>
                                    <Fragment>
                                        <Button
                                            aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => {
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
                                                    item.title

                                            }
                                        </Button>
                                        <Menu
                                            className={classes.list}
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={itemClicked === item.id}
                                            onClose={handleClose}
                                        // TransitionComponent={Fade}
                                        >
                                            {
                                                item.subItems.map((subItem, index) => (
                                                    <MenuItem key={index} onClick={() => handleClickSubItem(subItem)}>
                                                        <Title
                                                            listItem
                                                            listStyleType="disc"
                                                            listStylePosition="inside"
                                                            uppercase
                                                            fontSize="12px"
                                                            letterspacing="1px"
                                                            color="black"
                                                            content={subItem.title} />
                                                    </MenuItem>
                                                ))
                                            }
                                        </Menu>
                                    </Fragment>
                                </Box>
                            ))
                        }
                        <Icon src="/static/icons/P.Adhérent1.png" maxWidth="50px" />
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header