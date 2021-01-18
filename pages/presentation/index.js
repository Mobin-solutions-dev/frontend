import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'

const Presentation = ({ }) => {
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Présentation de Mob'In " size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Box mt={2}>
                                <Text>
                                    Le réseau Mob’In fédère les acteurs de la mobilité inclusive, solidaire et durable sous la forme d’organisations régionales.
                                <br />
                                    <br />
                                    Il fédère 8 régions Mob’In et regroupe près de 150 membres en France. Le réseau a pour pour objectif de rassembler des acteurs territoriaux de la mobilité. Ces structures, que ce soient des écoles de conduite à statut associatif, des garages solidaires ou des plateformes mobilité ont en commun une priorité : l’accompagnement à la mobilité des publics vulnérables.
                                <br />
                                    <br />
                                    Au sein de chaque région, au plus près des territoires, des hommes et des femmes, acteurs associatifs apportent leurs compétences pédagogiques, leur capacité à innover et à développer des projets qui favorisent la mobilité de leurs bénéficiaires.
                                </Text>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            IMAGE
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            IMAGE
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box mt={2}>
                                <Text>
                                    Le réseau Mob’In c’est :
                                    <ul>
                                        <li><strong>8 régions</strong> Mob’In constituées</li>
                                        <li><strong>+ de 120 adhérents</strong></li>
                                        <li><strong>+ de 35 000 personnes accompagnées</strong></li>
                                        <li><strong>+ de 60 conseillers mobilité</strong></li>
                                    </ul>
                                </Text>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default Presentation