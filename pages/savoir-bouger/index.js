import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, MoveCard } from '../../components'
import { savoirBouger } from '../../utils'
import Link from 'next/link'

const SavoirBougerPage = ({ }) => {
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Title content="Savoir Bouger" size="h4" uppercase bold letterspacing="2px" />
                    <Box mt={2} mb={2}>
                        <Text  >
                            Splendida porro oculi fugitant uitanque tueri; sol etiam caecat, contra si tendere pergas propterea quia uis ma- gnast ipsius, et alte aera per purum grauiter simulacra feruntur, et feriunt oculos turbantia composituras. Praeterea spleendor quicumque est acer adurit saepe oculos, ideo quod semina possidet ignis multa.
                    </Text>
                    </Box>
                    <Box mt={4} mb={2}>
                        <Grid container spacing={2}>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={savoirBouger[0]} /></Box>
                                <Box><MoveCard info={savoirBouger[3]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={savoirBouger[1]} /></Box>
                                <Box><MoveCard info={savoirBouger[4]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={savoirBouger[2]} /></Box>
                                <Box><MoveCard info={savoirBouger[5]} /></Box>
                            </Grid>
                            {/* {
                                savoirBouger.map((info, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                                        <MoveCard info={info} />
                                    </Grid>
                                ))
                            } */}
                        </Grid>
                    </Box>
                    <Box mt={4}>
                        <Text fontSize="18px">
                            Vous retrouverez la liste complète des activités proposées par les adhérents <Link href="/adherents">ici</Link>.
                        </Text>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default SavoirBougerPage