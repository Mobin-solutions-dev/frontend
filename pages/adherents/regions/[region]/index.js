import { Container, Box, Grid, Table, TableBody, TableCell } from '@material-ui/core'
import { Layout, Title, AdherentPreview } from '../../../../components'
import { useRouter } from 'next/router'
import { getDepartments, getAdherents, getCoordinateurs } from '../../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        // border: `1px ${theme.palette.orange.main} solid`,
        borderRadius: "10px",
        padding: "1em",
        marginBottom: '1em'
    },
    cell: {
        verticalAlign: 'top'
    },
    mainImage: {
        maxHeight: '100%',
        maxWidth: '100%',
        marginBottom: '3em'
    }
}))

const Region = ({ departments = [], adherents = [], coordinateurs = [] }) => {
    const classes = useStyles()
    const router = useRouter()
    const { region } = router.query

    // Get filtered Departments
    const regionDepartments = departments.filter(dep => dep.region.nom_region === region)

    // Get filtered Regions
    const regionAdherents = adherents.filter(adh => adh.region_siege.nom_region === region)

    // Get filtered coordinateur
    const uniqueCoordinateur = coordinateurs.find(c => c.region.nom_region === region)

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="md">
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Box mb={5}>
                                <Title content={region} size="h4" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                    </Grid>
                    {
                        uniqueCoordinateur ?.logo && (
                            <Grid container>
                                <Grid item xs={12}>
                                    <img
                                        className={classes.mainImage}
                                        src={uniqueCoordinateur ?.logo ?.formats ?.small ?.url || undefined}
                                        alt="mobilite"
                                    />
                                </Grid>
                            </Grid>
                        )
                    }

                    {
                        uniqueCoordinateur && (
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Box className={classes.banner}>
                                        <Table>
                                            <TableBody>
                                                <TableCell className={classes.cell}>
                                                    <Title
                                                        fontSize="16px"
                                                        color="black"
                                                        bold
                                                        content="Président de région" />
                                                </TableCell>
                                                <TableCell>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="16px"
                                                            color="#2699b0"
                                                            bold
                                                            content={uniqueCoordinateur.nom_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.telephone_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.email_president || ""} />
                                                    </Box>
                                                </TableCell>
                                            </TableBody>

                                            <TableBody>
                                                <TableCell className={classes.cell}>
                                                    <Title
                                                        fontSize="16px"
                                                        color="black"
                                                        bold
                                                        content="Co-Président de région" />
                                                </TableCell>
                                                <TableCell>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="16px"
                                                            color="#2699b0"
                                                            bold
                                                            content={uniqueCoordinateur.nom_co_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.telephone_co_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.email_co_president || ""} />
                                                    </Box>
                                                </TableCell>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Grid>
                            </Grid>
                        )
                    }


                    <Box mb={5}>
                        <Title
                            color="black"
                            content="Toutes les structures" size="h6" uppercase bold letterspacing="2px" />
                        <Title
                            color="black"
                            content="Filtrer les résultats :" size="h6" uppercase italic bold letterspacing="2px" fontSize="12px" />
                        {
                            regionDepartments.map((dep, index) => (
                                <Box key={index} mt={3}>
                                    <Box>
                                        <Title
                                            color="black"
                                            content={dep.nom_departement} size="h6" uppercase bold letterspacing="2px" fontSize="12px" />
                                    </Box>
                                    <Grid container>
                                        {
                                            regionAdherents.filter(adh => adh.departement_siege.nom_departement === dep.nom_departement).map((d, i) => (
                                                <AdherentPreview key={i} adherent={d} />
                                            ))
                                        }
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Box>
                    {/* </Grid> */}
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(getDepartments)
    const departments = await res.json()
    const res2 = await fetch(getAdherents)
    const adherents = await res2.json()
    const res3 = await fetch(getCoordinateurs)
    const coordinateurs = await res3.json()
    return {
        props: { departments, adherents, coordinateurs }
    };
}

export default Region