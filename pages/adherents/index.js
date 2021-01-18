import { useEffect } from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title } from '../../components'
import ReactHtmlParser from 'react-html-parser';
import { FranceSVG } from '../../utils'

const Adherents = ({ }) => {

    const html = FranceSVG

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Nos Adhérents" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Grid xs={12}>
                    <Box>
                        <div className="map" id="map">
                            <div>{ReactHtmlParser(html)}</div>
                        </div>
                    </Box>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Adherents