import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text } from '../../components'
import { getPartners } from '../../utils'
import Image from 'next/image'

const Partenaires = ({ partners = [] }) => {
    console.log("partners", partners)
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content="Nos partenaires" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container spacing={3}>
                        {
                            partners.map((partner, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Card>
                                        {
                                            partner.logo_partenaire && (
                                                <Box mt={1} style={{ height: '100px', width: "200px" }}>
                                                    <img style={{ height: "100%", width: "100%" }} src={partner.logo_partenaire[0].url} />
                                                </Box>
                                            )
                                        }
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(getPartners)
    const partners = await res.json()
    return {
        props: { partners }
    };
}

export default Partenaires