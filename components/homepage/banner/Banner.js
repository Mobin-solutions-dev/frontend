import { Container, Typography, Box, Grid, Link } from '@material-ui/core';
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
                            <Link href="adherents">
                                <Box pl={3.5}>
                                    <Icon
                                        maxWidth="75px"
                                        src="/static/icons/P.Adhérents.png" />
                                </Box>

                                <Box>
                                    <Title letterspacing="1px" uppercase bold content="nos adhérents" fontSize="15px" color="#2699b0" />
                                </Box>
                            </Link>

                        </Grid>

                        <Grid item className={classes.box}>
                            <Box pl={2}>
                                <Icon
                                    maxWidth="75px"
                                    src="/static/icons/P.chiffres.png" />
                            </Box>
                            <Box>
                                <Title letterspacing="1px" uppercase bold content="nos chiffres" fontSize="15px" color="#2699b0" />
                            </Box>
                        </Grid>

                        <Grid item className={classes.box}>
                            <Box>
                                <Icon
                                    maxWidth="75px"
                                    src="/static/icons/P.actus.png" />
                            </Box>
                            <Box>
                                <Title letterspacing="1px" uppercase bold content="nos actus" fontSize="15px" color="#2699b0" />
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            </Grid>
        </Grid >
    )
}

export default Banner