import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text, MoveCard } from '../../components'
import { pouvoirBouger } from '../../utils'
import Link from 'next/link'


const PouvoirBougerPage = ({ }) => {
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Title content="Pouvoir Bouger" size="h4" uppercase bold letterspacing="2px" />
                    <Box mt={2} mb={2}>
                        <Text justify>
                            Le réseau Mob’In propose une offre globale et coordonnée d’actions qui permettent d’agir au service du « Savoir bouger » et du « Pouvoir bouger ».
                                <br />
                            <br />
                            Les actions au service du « Pouvoir bouger » permettent de lever les freins matériels et financiers et de disposer de moyens matériels pour se déplacer.
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
                                <Box><MoveCard info={pouvoirBouger[0]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[3]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={pouvoirBouger[1]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[4]} /></Box>
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                // justify="center"
                                // alignItems="center"
                                xs={12} sm={6} md={6} lg={4}
                            >
                                <Box><MoveCard info={pouvoirBouger[2]} /></Box>
                                <Box><MoveCard info={pouvoirBouger[5]} /></Box>
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

export default PouvoirBougerPage