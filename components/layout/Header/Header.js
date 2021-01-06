import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { Icon } from '../../global'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.background.default,
        marginBottom: "10px"
    },
    navbarItem: {
        backgroundColor: theme.palette.blue.main,
        color: theme.palette.background.default,
    }
}))
const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
            <Box pb={1} pt={1}>
                <Toolbar>
                    <div style={{ display: 'flex' }}>
                    </div>
                    <Link href="/">
                        <Icon src="/static/icons/logo_mobin.jpg" />
                    </Link>
                    <Box ml={2}>
                        <Button
                            className={classes.navbarItem}
                            variant="contained"
                        >
                            Nos Activités
                 </Button>
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
                    </Box>
                </Toolbar>
            </Box>

        </AppBar>
    )
}

export default Header