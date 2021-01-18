import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { getTrainings } from '../../utils'
import Link from 'next/link'

const Formations = ({ trainings = [] }) => {
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content="Nos formations" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    {
                        trainings.map((training, i) => (
                            <Grid container key={i}>
                                <Box mt={2}>
                                    <Text fontSize="18px" color="#2699b0">
                                        <Link href={`formations/${training.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                            {training.titre}
                                        </Link>
                                    </Text>
                                </Box>

                            </Grid>
                        ))
                    }
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(getTrainings)
    const trainings = await res.json()
    return {
        props: { trainings }
    };
}

export default Formations