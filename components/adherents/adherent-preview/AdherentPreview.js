import { Box, Grid, Paper, Card, CardContent, Button, Chip, Divider } from '@material-ui/core'
import { Title, Text } from '../../global'
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from "@material-ui/icons/ArrowRight"

const useStyles = makeStyles((theme) => ({
    chip: {
        marginTop: "1em",
        backgroundColor: theme.palette.blue.main,
        color: "#fff"
    },
    btn: {
        color: "black",
        borderColor: theme.palette.orange.main
    }
}))

const AdherentPreview = ({ adherent = {} }) => {
    const classes = useStyles();
    const { nom_adherent, adresse, competences } = adherent
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box mt={2} ml={2}>
                <Paper>
                    <Card>
                        <CardContent>
                            <Box>
                                <Title
                                    content={nom_adherent}
                                    color="#e95e2e"
                                    size="h6" uppercase bold letterspacing="1px"
                                />
                                <Divider />
                            </Box>
                            <Box mt={1}>
                                <Text fontSize="13px">{adresse} </Text>
                            </Box>
                            <Box mb={2}>
                                <Grid container>
                                    {
                                        competences && competences.map(comp => (
                                            <Grid item xs={12}>
                                                <Box>
                                                    <Chip className={classes.chip} label={comp.type} />
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                            <Divider />
                            <Box mt={2}>
                                <Button className={classes.btn} variant="outlined">
                                    Voir la structure
                                    <ArrowRight />
                                </Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Paper>

            </Box>
        </Grid>
    )
}

export default AdherentPreview