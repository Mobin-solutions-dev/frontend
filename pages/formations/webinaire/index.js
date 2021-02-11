import { Container, Box, Grid } from '@material-ui/core'
import { Layout, Title, Text } from '../../../components'
import { getTrainings } from '../../../utils'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center'
    },
    gridItem: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // marginBottom: "1em",
        // textAlign: "center"
    },
    greyBox: {
        marginTop: "1em",
        backgroundColor: theme.palette.gray.main,
        borderRadius: '10px',
        padding: "1em"
    },
    item1: {
        order: 1,
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    item2: {
        order: 2,
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
}))

const Webinaire = ({ trainings = [] }) => {
    console.log("trainings", trainings)
    const filteredTrainings = trainings.filter(training => training ?.formation_categorie ?.type === "Webinaire")

    const classes = useStyles()
    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Box mb={5}>
                            <Title content="Formations en" size="h4" bold letterspacing="2px" />
                            <Title color="#2699b0" content="webinaire" size="h4" bold letterspacing="2px" />
                        </Box>
                    </Grid>
                    {
                        !filteredTrainings || filteredTrainings.length < 1 && (
                            <Grid container>
                                <Text color="#000" size="h6">Aucune formation actuellement disponible.</Text>
                            </Grid>
                        )
                    }
                    {
                        filteredTrainings.map((training, i) => (
                            <Grid container key={i}>
                                <Box mt={2}>
                                    <Text fontSize="18px" color="#2699b0">
                                        <Link href={`/formations/${training.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                            {training.titre}
                                        </Link>
                                    </Text>
                                </Box>

                            </Grid>
                        ))
                    }

                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(getTrainings)
    const trainings = await res.json()
    return {
        props: { trainings }
    };
}

export default Webinaire