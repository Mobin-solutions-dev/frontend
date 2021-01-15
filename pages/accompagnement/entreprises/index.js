import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, Text } from '../../../components'

const Entreprises = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content="Au service des entreprises" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Text  >
                                    Vous souhaitez avoir des informations sur l’accompagnement proposé par Mob’In France ou vous avez un projet de mobilité solidaire sur votre territoire ou votre entreprise ?
                            <br />
                                    <br />
                                    N’hésitez pas à nous laisser un message par le biais de ce formulaire de contact :
                            </Text>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Entreprises