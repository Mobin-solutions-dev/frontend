import { Container, Box } from '@material-ui/core'
import { Header, Title, Text, Banner } from '../../../components'


const Integramob = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Title content="Integramob" size="h4" uppercase bold letterspacing="2px" />
                    <Box mt={2} mb={2}>
                        <Text fontSize="15px">
                            Splendida porro oculi fugitant uitanque tueri; sol etiam caecat, contra si tendere pergas propterea quia uis ma- gnast ipsius, et alte aera per purum grauiter simulacra feruntur, et feriunt oculos turbantia composituras. Praeterea spleendor quicumque est acer adurit saepe oculos, ideo quod semina possidet ignis multa.
                    </Text>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Integramob