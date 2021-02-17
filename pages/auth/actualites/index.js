import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Text, DownloadDocumentSection } from '../../../components'
import { getResources } from '../../../utils'


const PrivateNews = ({ docs = [] }) => {

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#e95e2e" }}>Actualités</span>
                            </Text>
                        </Box>
                    </Grid>

                    <Box mb={2} mt={4}>
                        <Grid container spacing={10}>
                            {
                                docs && docs.map((doc, index) => (
                                    <Grid key={index} item xs={12} md={6}>
                                        <DownloadDocumentSection doc={doc} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(getResources)
    const resources = await res.json()
    const docs = resources.filter(doc => doc?.thematique?.titre === "Actualités").sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    return {
        props: { docs }
    };
}


export default PrivateNews