import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text } from '../../../components'
import { getResources } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    gridItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    img: {
        width: "100%",
        maxHeight: "80px",
        objectFit: "contain"
    },
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
}))

const DocumentsFederaux = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#e95e2e" }}>Documents</span> <span style={{ color: "#2699b0" }}>fédéraux</span>
                            </Text>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}


export default DocumentsFederaux