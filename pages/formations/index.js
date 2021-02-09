import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { getTrainings } from '../../utils'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    mainImage2: {
        maxHeight: '100%',
        maxWidth: '100%',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    gridItem: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // marginBottom: "1em",
        // textAlign: "center"
    },
    greyBox: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        padding: "1em"
    },
    item1: {
        order: 1,
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    item2: {
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
}))

const Formations = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Nos" size="h4" bold letterspacing="2px" />
                            <Title color="#2699b0" content="formations" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        justify="center"
                    >
                        <Grid item xs={12} md={4} align="center">
                            <Grid container justify="center" alignItems="center">
                                <Link href="/formations/presentiel">
                                    <a>
                                        <img
                                            className={classes.mainImage}
                                            src="/static/cadres/presentiel.png"
                                            alt="mobilite"
                                        />
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} align="center">
                            <Grid container justify="center" alignItems="center">
                                <Link href="/formations/webinaire">
                                    <a>
                                        <img
                                            className={classes.mainImage}
                                            src="/static/cadres/webinaire.png"
                                            alt="mobilite"
                                        />
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box mt={15}>
                        <Grid container>
                            <Grid item xs={12} md={12} align="center">
                                <Grid container justify="center" alignItems="center">
                                    <img
                                        className={classes.mainImage2}
                                        src="/static/illus/two_teams.png"
                                        alt="mobilite"
                                    />

                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default Formations