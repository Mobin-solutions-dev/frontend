import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, HtmlContent } from '../../../components'
import { accompagnerTerritoires, developpementEcoleConduite, mobiliteMigrants } from '../../../utils'

const Territoires = ({ }) => {
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content="Au service des territoires" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Accompagner les territoires à la création d’une offre mobilité solidaire" size="h6" uppercase bold letterspacing="1px" />
                            </Box>
                            <Box>
                                {accompagnerTerritoires}
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Développement d’une école de conduite à statut associatif" size="h6" uppercase bold letterspacing="1px" />
                            </Box>
                            <Box>
                                {developpementEcoleConduite}
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Offre de mobilité pour les migrants" size="h6" uppercase bold letterspacing="1px" />
                            </Box>
                            <Box>
                                {mobiliteMigrants}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default Territoires