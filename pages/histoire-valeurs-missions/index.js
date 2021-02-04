import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt"

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '100%',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    gridItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1em"
    }
}))

const History = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Notre histoire, nos valeurs et nos missions" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Notre histoire" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                            <Box mt={2}>
                                <Text size="h6" color="#2699b0">
                                    L’association Mob’In France a été créée le 30 août 2017, par d’anciens membres de l’association FARE.
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
                        <Grid item xs={9} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Bleu3.png"
                                alt="mobilite"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Nos valeurs" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                            <Box mt={2}>
                                <Text size="h6" color="#2699b0">
                                    L’association a pour objet d’accompagner les personnes en situation de fragilité vers une mobilité autonome et durable.
                                    <br />
                                    <br />
                                    L’association Mob’In France est indépendante et fédère des associations régionales elles-aussi indépendantes dans leur fonctionnement et dans leur financement.
                                </Text>
                            </Box>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Nos missions" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                            <Box mt={2}>
                                <Title size="h6" italic content="Partager un cadre commun de valeurs et de principes d’action entre les Régions Mob’In et permettre la mutualisation des compétences, expériences, méthodes et outils" />

                                <br />
                                <Title size="h6" italic content="Assurer une représentation nationale des Mob’In régionaux et des projets locaux auprès des acteurs nationaux et des partenaires." />
                                <br />
                                <Title size="h6" italic content="Accompagner la mise en place d’organisations régionales dans un cadre national cohérent et les accompagner dans leur développement et la définition d’une stratégie et d’un plan d’action" />
                                <br />
                            </Box>
                        </Grid>
                        <Grid item xs={9} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Vert4.png"
                                alt="mobilite"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default History