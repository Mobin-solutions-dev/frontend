import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { makeStyles } from '@material-ui/core/styles';

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

const Presentation = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Présentation de Mob'In " size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={2} mb={8}>
                                <Text size="h6" color="#2699b0">
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
                        <Grid item xs={9} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                src="/static/verbatims/Verbatim Bleu.png"
                                alt="mobilite"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>

                        <Grid item xs={9} sm={6} md={4} className={classes.gridItem}>
                            <img
                                className={classes.mainImage}
                                alt="mobilite"
                                src="/static/verbatims/Verbatim Jaune-orangé2.png"
                            />
                        </Grid>
                        <Grid item xs={12} md={8} className={classes.gridItem}>
                            <Box mt={2} pl={10}>
                                <Text size="h5">Le réseau Mob’In c’est :</Text>
                                <br />
                                <Title italic size="h4" content="8 régions Mob'In constituées" />
                                <br />
                                <Title italic size="h4" content="+ de 120 adhérents" />
                                <br />
                                <Title italic size="h4" content="+ de 35 000 personnes accompagnées" />
                                <br />
                                <Title italic size="h4" content="+ de 60 conseillers mobilité" />
                                <br />
                                {/* <ul>
                                        <li><strong>8 régions</strong> Mob’In constituées</li>
                                        <li><strong>+ de 120 adhérents</strong></li>
                                        <li><strong>+ de 35 000 personnes accompagnées</strong></li>
                                        <li><strong>+ de 60 conseillers mobilité</strong></li>
                                    </ul> */}
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default Presentation