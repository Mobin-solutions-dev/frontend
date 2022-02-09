import { Fragment } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Title, Text } from '../../../components';
import { getTrainings } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '300px',
    maxWidth: 'auto',
    // opacity: 0.9,
    display: 'block',
    textAlign: 'center',
  },
  gridItem: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // marginBottom: "1em",
    // textAlign: "center"
  },
  greyBox: {
    marginTop: '1em',
    backgroundColor: theme.palette.gray.main,
    borderRadius: '10px',
    padding: '1em',
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
  list: {
    color: theme.palette.blue.main,
  },
  listItem: {
    marginBottom: '0px',
    marginTop: '0px',
  },
}));

const Presentiel = ({ trainings = [] }) => {
  const filteredTrainings = trainings.filter((training) => training?.formation_categorie?.type === 'Présentiel');

  const classes = useStyles();
  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container>
            <Box mb={5}>
              <Title content="Formations en" size="h4" bold letterspacing="2px" />
              <Title color="#2699b0" content="présentiel" size="h4" bold letterspacing="2px" />
            </Box>
          </Grid>
          {
                        !filteredTrainings || filteredTrainings.length < 1 && (
                        <Box className={classes.greyBox}>
                          <Grid container>
                            <Text color="#000" size="h6">Aucune formation actuellement disponible.</Text>
                          </Grid>
                        </Box>
                        )
                    }
          {
                        filteredTrainings && (
                        <Box className={classes.greyBox}>
                          <ul className={classes.list}>
                            {
                                        filteredTrainings.map((training, index) => (
                                          <Fragment key={index}>
                                            <li className={classes.listItem}>
                                              <Link href={`/formations/${training.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                                {training.titre}
                                              </Link>
                                            </li>
                                            <br />
                                          </Fragment>
                                        ))
                                    }
                          </ul>
                        </Box>
                        )
                    }

        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(getTrainings);
  const trainings = await res.json();
  return {
    props: { trainings },
  };
};

export default Presentiel;
