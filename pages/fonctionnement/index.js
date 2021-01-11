import { Fragment } from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Header, Title, Text } from '../../components'
import { regions, bureau } from '../../utils'
import Link from 'next/link'

const Fonctionnement = ({ }) => {
    return (
        <>
            <Header />
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Notre Fonctionnement" size="h4" uppercase bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={4}>
                                <Title
                                    color="black"
                                    content="Les Mob'In régionaux" size="h6" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mt={2}>
                                <Text fontSize="15px">
                                    {
                                        regions.map((region, index) => (
                                            <Fragment key={index}>
                                                <li><Link href={`/adherents/regions/${region}`}>{`Mob'In ${region}`}</Link></li>
                                                <br />
                                            </Fragment>
                                        ))
                                    }
                                </Text>
                            </Box>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <Title
                                        color="black"
                                        content="L'équipe salariée" size="h6" uppercase bold letterspacing="2px" />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <strong>Justine Vuillaume, chargée de mission développement </strong>
                                    <br />
                                    <br />
                                    jvuillaume@mobin-solutions.fr
                                    <br />
                                    <br />
                                    06.10.33.93.11
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <Title
                                        color="black"
                                        content="Le bureau exécutif" size="h6" uppercase bold letterspacing="2px" />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    {
                                        bureau.map((member, i) => (
                                            <Fragment key={i}>
                                                <strong>{member.name}</strong>, {member.position}
                                                <br />
                                                <br />
                                            </Fragment>
                                        ))
                                    }
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <Title
                                        color="black"
                                        content="Le conseil d'administration" size="h6" uppercase bold letterspacing="2px" />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <Title
                                        color="black"
                                        content="Les status de l'association" size="h6" uppercase bold letterspacing="2px" />
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Fonctionnement