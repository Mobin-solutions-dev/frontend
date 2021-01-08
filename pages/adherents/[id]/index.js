import { Header, Title } from '../../../components'
import { Box, Container, Grid, Table, TableBody, TableCell, Chip } from '@material-ui/core'
import { getAdherent } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cell1: {
        verticalAlign: 'top',
        fontWeight: 'bold'
    },
    cell2: {
        verticalAlign: 'top'
    },
    chip: {
        marginTop: "1em",
        backgroundColor: theme.palette.blue.main,
        color: "#fff"
    },
    chip2: {
        marginTop: "1em",
        backgroundColor: theme.palette.green.main,
        color: "#fff"
    },
}))

const Adherent = ({ adherent = {} }) => {
    const classes = useStyles();

    const { nom_adherent, presentation_adherent, numero_telephone, email, site_internet, adresse, departements_actions, projets, competences } = adherent
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content={nom_adherent} size="h5" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Box mb={5}>
                            <Table>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Adresse
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{adresse}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Téléphone
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{numero_telephone}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Email
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{email}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Site internet
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{site_internet}</TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Compétences
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                        <Grid container>
                                            {
                                                competences && competences.map((comp, index) => (
                                                    <Grid item xs={12} key={index}>
                                                        <Box>
                                                            <Chip className={classes.chip} label={comp.type} />
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Projets
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">
                                        <Grid container>
                                            {
                                                projets && projets.map((proj, index) => (
                                                    <Grid item xs={12} key={index}>
                                                        <Box>
                                                            <Chip className={classes.chip2} label={proj.nom} />
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </TableCell>
                                </TableBody>

                                <TableBody>
                                    <TableCell className={classes.cell1} component="th" scope="row">
                                        Présentation
                                    </TableCell>
                                    <TableCell className={classes.cell2} align="left">{presentation_adherent}</TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(getAdherent(id))
    const adherent = await res.json()
    return {
        props: { adherent }
    };
}

export default Adherent