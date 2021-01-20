import { Container, Grid } from '@material-ui/core'
import { Title, NewsCardSummary } from '../../../components'
import { getNews } from '../../../utils'

const NewsSection = ({ news = [] }) => {
    return (
        <Container>
            <Title content="les actus" size="h4" uppercase bold letterspacing="2px" />
            <Grid container>

                {
                    news.map(newsItem => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={newsItem.id}>
                            <NewsCardSummary newsItem={newsItem} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default NewsSection