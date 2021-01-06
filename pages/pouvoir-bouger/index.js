import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, Text, MoveCard } from '../../components'
import { pouvoirBouger } from '../../utils'


const PouvoirBougerPage = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Title content="Pouvoir Bouger" size="h4" uppercase bold letterspacing="2px" />
                    <Box mt={2} mb={2}>
                        <Text fontSize="15px">
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
                </Container>
            </Box>
        </>
    )
}

export default PouvoirBougerPage