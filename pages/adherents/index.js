import { Container, Box } from '@material-ui/core'
import { Header, Title } from '../../components'


const Adherents = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Title content="Adherents" size="h4" uppercase bold letterspacing="2px" />
                </Container>
            </Box>
        </>
    )
}

export default Adherents