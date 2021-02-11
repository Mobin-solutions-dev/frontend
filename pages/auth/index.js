import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'

import { makeStyles } from '@material-ui/core/styles';

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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>

                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}


export default AuthHome