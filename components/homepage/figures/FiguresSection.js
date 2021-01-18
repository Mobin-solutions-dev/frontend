import { Container, Grid, Box } from '@material-ui/core'
import { Title, Icon } from '../../global'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        paddingRight: "1em"
    },
    iconSection: {
        paddingBottom: "10px"
    }
}))
const FiguresSection = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box pt={10} pb={10}>
                <Grid>
                    <Title content="les chiffres" size="h4" uppercase bold letterspacing="2px" />
                    <Box pt={5} pb={5} className={classes.box}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6} lg={3}>
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.reçus.png" maxWidth="180px" />
                                    <Title bold size="h3" content="2500" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de personnes reçues" color="black" size="h6" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.conseillers.png" maxWidth="180px" />
                                    <Title bold size="h3" content="85" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de conseillers mobilité" color="black" size="h6" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.location.png" maxWidth="180px" />
                                    <Title bold size="h3" content="750" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de jours de location" color="black" size="h6" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} lg={3}>
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.Adherents2.png" maxWidth="180px" />
                                    <Title bold size="h3" content="150" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre d'adhérents" color="black" size="h6" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default FiguresSection