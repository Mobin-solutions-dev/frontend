import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, HtmlContent } from '../../../components'
import { getTraining } from '../../../utils'

const Formation = ({ training = {} }) => {

    const { titre = "", description = "" } = training

    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content={titre} size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Box mt={2}>
                            <Box mt={4}>
                                <HtmlContent content={description} />
                            </Box>
                        </Box>

                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(getTraining(id))
    const training = await res.json()
    return {
        props: { training }
    };
}

export default Formation