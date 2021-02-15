import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { privateMenuSections } from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    gridItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    img: {
        width: "100%",
        maxHeight: "80px",
        objectFit: "contain"
    },
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
}))

const AuthHome = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#2699b0" }}>Mon espace</span> <span style={{ color: "#b1b3b4" }}>adhérent</span>
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        justify="center"
                    >
                        {
                            privateMenuSections && privateMenuSections.map((section, index) => (
                                <Grid key={index} item xs={12} md={6} align="center">
                                    <Grid container justify="center" alignItems="center">
                                        <Link href={section.route}>
                                            {section.title}
                                            {/* <a>
                                                <img
                                                    className={classes.mainImage}
                                                    src="/static/cadres/presentiel.png"
                                                    alt="mobilite"
                                                />
                                            </a> */}
                                        </Link>
                                    </Grid>
                                </Grid>
                            ))
                        }

                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}


export default AuthHome