import { Container, Grid, Box } from '@material-ui/core'
import { Title, Icon } from '../../global'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
                    <Title content="les chiffres" size="h3" uppercase bold letterspacing="2px" />
                    <Box pt={5} pb={5}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6} md={3} justifyContent="center">
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.reçus.png" maxWidth="180px" />
                                    <Title bold size="h3" content="2500" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de personnes reçues" color="black" fontSize="15px" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} justifyContent="center">
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.conseillers.png" maxWidth="180px" />
                                    <Title bold size="h3" content="85" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de conseillers mobilité" color="black" fontSize="15px" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} justifyContent="center">
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.location.png" maxWidth="180px" />
                                    <Title bold size="h3" content="750" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre de jours de location" color="black" fontSize="15px" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} justifyContent="center">
                                <Box display="flex" alignItems="flex-end" className={classes.iconSection}>
                                    <Icon src="/static/icons/P.Adherents2.png" maxWidth="180px" />
                                    <Title bold size="h3" content="150" color="black" />
                                </Box>
                                <Box pl={4}>
                                    <Title content="Nombre d'adhérents" color="black" fontSize="15px" />
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