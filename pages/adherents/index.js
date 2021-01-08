import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, FranceMap } from '../../components'


const Adherents = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Adherents" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                        <Grid item xs={12}>
                            <FranceMap />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Adherents