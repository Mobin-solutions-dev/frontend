import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title } from '../../components'

const Fonctionnement = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Présentation de Mob'In " size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Fonctionnement