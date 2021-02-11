import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, HtmlContent, Text } from '../../../components'
import { getTraining } from '../../../utils'

const Formation = ({ training = {} }) => {
    const { titre = "", description = "", document_pdf = null } = training

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content={titre} size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    {
                        document_pdf && (
                            <Grid container>
                                <Text size="body1" color="#000">
                                    <a target="_blank" href={document_pdf?.url}>Télécharger le document de présentation</a>
                                </Text>
                            </Grid>
                        )
                    }

                    <Grid container>
                        <Box mt={2}>
                            <Box mt={4}>
                                <HtmlContent content={description} />
                            </Box>
                        </Box>

                    </Grid>
                </Container>
            </Box>
        </Layout>
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