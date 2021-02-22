import { Fragment } from 'react'
import { Container, Box, Grid, Card } from '@material-ui/core'
import { Layout, Title, Text, PrivateDocumentsCard } from '../../components'
import { privateMenuSections, isTokenValid } from '../../utils'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Cookies from 'cookies'



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

const AuthHome = ({ }) => {
    const classes = useStyles();

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={2}>
                            <Text size="h4" letterspacing="2px" bold>
                                <span style={{ color: "#2699b0" }}>Mon espace</span> <span style={{ color: "#b1b3b4" }}>adhérent</span>
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={4} justify="center">
                                {
                                    privateMenuSections &&
                                    privateMenuSections.map((section, index) => (
                                        <Grid key={index} item xs={12} sm={6}>
                                            <PrivateDocumentsCard section={section} />
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    const req = ctx.req ? ctx.req : null
    if (req) {
        const cookies = new Cookies(ctx.req, ctx.res)
        const token = cookies.get('token')
        if (token) {
            const isTokValid = isTokenValid(token)
            if (isTokValid) {
                return { props: {} }
            } else {
                ctx.res.writeHead(302, { Location: '/' })
                ctx.res.end()
                return { props: {} }
            }


        } else {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
            return { props: {} }
        }
    } else {

    }
}


export default AuthHome