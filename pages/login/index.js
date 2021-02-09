import { } from 'react'
import { Container, Box, Grid, Card, Paper } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}))

const Login = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    {/* <Grid container>
                        <Box mb={4}>
                            <Title content="Connexion Adhérent" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid> */}
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={10} md={8}>
                            <Paper >
                                Hello
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default Login