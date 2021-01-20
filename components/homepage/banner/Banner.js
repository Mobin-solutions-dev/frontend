import { Container, Typography, Box, Grid, Link, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Link from 'next/link'
import { Icon, Title } from '../../global'

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    text: {
        color: theme.palette.blue.main
    }
}))
const Banner = ({ }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box pt={3} pb={3}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item className={classes.box}>
                            <Link href="/adherents">
                                <Box pl={3.5}>
                                    <Icon
                                        maxWidth="75px"
                                        src="/static/icons/P.Adhérents.png" />
                                </Box>

                                <Box>
                                    <Title letterspacing="1px" uppercase bold content="nos adhérents" size="body1" color="#2699b0" />
                                </Box>
                            </Link>

                        </Grid>

                        <Grid item className={classes.box}>
                            <Link href="/#figures">
                                <Box pl={2}>
                                    <Icon
                                        maxWidth="75px"
                                        src="/static/icons/P.chiffres.png" />
                                </Box>
                                <Box>
                                    <Title letterspacing="1px" uppercase bold content="nos chiffres" size="body1" color="#2699b0" />
                                </Box>
                            </Link>
                        </Grid>

                        <Grid item className={classes.box}>
                            <Link href="/#news">
                                <Box>
                                    <Icon
                                        maxWidth="75px"
                                        src="/static/icons/P.actus.png" />
                                </Box>
                                <Box>
                                    <Title letterspacing="1px" uppercase bold content="nos actus" size="body1" color="#2699b0" />
                                </Box>
                            </Link>
                        </Grid>


                    </Grid>
                </Box>
                <Divider />
            </Grid>
        </Grid >
    )
}

export default Banner