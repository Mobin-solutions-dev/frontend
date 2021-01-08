import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, AdherentPreview } from '../../../../components'
import { useRouter } from 'next/router'
import { getDepartments, getAdherents } from '../../../../utils'

const Region = ({ departments = [], adherents = [] }) => {
    const router = useRouter()
    const { region } = router.query

    // Get filtered Departments
    const regionDepartments = departments.filter(dep => dep.region.nom_region === region)

    // Get filtered Regions
    const regionAdherents = adherents.filter(adh => adh.region_siege.nom_region === region)

    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content={region} size="h4" uppercase bold letterspacing="2px" />
                        </Box>

                    </Grid>
                    {/* <Grid container> */}

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
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(getDepartments)
    const departments = await res.json()
    const res2 = await fetch(getAdherents)
    const adherents = await res2.json()
    return {
        props: { departments, adherents }
    };
}

export default Region