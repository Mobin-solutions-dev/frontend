import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, Text } from '../../components'


const History = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Notre histoire, nos valeurs et nos missions" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Notre histoire" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mt={2}>
                                <Text fontSize="15px">
                                    L’association Mob’In France a été créée le 30 août 2017, par d’ancien membre de l’association FARE.
                                <br />
                                    <br />
                                    FARE était la Fédération française des structures associatives de la mobilité, créée en 1988 par des éducateurs militants.
                                <br />
                                    <br />
                                    Fare est devenue peu à peu la fédération nationale des associations et de professionnels afin de favoriser l’accès à la mobilité pour tous, en particulier les publics en difficulté en fédérant les acteurs de la mobilité et en devenant un interlocuteur national.
                                <br />
                                    <br />
                                    Suite à sa disparition en octobre 2016, de nombreux acteurs sont restés réunis autour de l’idée du réseau.
                                <br />
                                    <br />
                                    Le réseau Mob’In a d’abord été constitué par l’échelle locale grâce aux structures du terrain ; puis à une échelle régionale avec la constitution des « Mob’In régionaux » ; et enfin la représentation nationale Mob’In France.
                                </Text>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Nos valeurs" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mt={2}>
                                <Text fontSize="15px">
                                    L’association a pour objet d’accompagner les personnes en situation de fragilité vers une mobilité autonome et durable.
                                    <br />
                                    <br />
                                    L’association Mob’In France est indépendante et fédère des associations régionales elles-aussi indépendantes dans leur fonctionnement et dans leur financement.
                                </Text>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Nos missions" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mt={2}>
                                <Text fontSize="15px">
                                    <li>Partager un cadre commun de valeurs et de principes d’action entre les Régions Mob’In et permettre la mutualisation des compétences, expériences, méthodes et outils</li>
                                    <br />
                                    <li>Assurer une représentation nationale des Mob’In régionaux et des projets locaux auprès des acteurs nationaux et des partenaires.</li>
                                    <br />
                                    <li>Accompagner la mise en place d’organisations régionales dans un cadre national cohérent et les accompagner dans leur développement et la définition d’une stratégie et d’un plan d’action</li>
                                </Text>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default History