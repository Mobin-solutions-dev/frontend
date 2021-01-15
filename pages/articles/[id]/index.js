import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, HtmlContent } from '../../../components'
import { getNewsItem } from '../../../utils'
import Image from 'next/image'

const Article = ({ article = {} }) => {

    const { titre_article, contenu_article, image_principale } = article
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Title content={titre_article} size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box mt={1}>
                                <Image
                                    src={image_principale ?.formats ?.large ?.url}
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                // layout="fill"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <HtmlContent content={contenu_article} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(getNewsItem(id))
    const article = await res.json()
    return {
        props: { article }
    };
}


export default Article