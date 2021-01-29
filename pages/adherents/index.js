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
                        <Box mb={1}>
                            <Title content="Nos Adhérents" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Box mb={3}>
                            <Title content="Sélectionnez une région:" bold size="body1" color="#000" />
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Grid>
                    <Box>
                        <div className="map" id="map">
                            <div style={{
                                textAlign: "center",
                            }}>{ReactHtmlParser(html)}</div>
                        </div>
                    </Box>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Adherents