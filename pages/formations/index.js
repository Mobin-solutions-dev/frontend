import { Container, Box, Grid } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Layout, Title } from '../../components';
import { getTrainings } from '../../utils';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    height: '300px',
    width: '250px',
  },
  mainImage: {
    maxHeight: '300px',
    maxWidth: 'auto',
    // opacity: 0.9,
    display: 'block',
    textAlign: 'center',
    position: 'absolute',
  },
  secondImage: {
    zIndex: 2,
    position: 'absolute',
    top: -22,
    left: 48,
    width: '70px',
  },
  secondImageBackground: {
    width: '70px',
    height: '35px',
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 48,
    border: '2px solid #e95e2e',
    borderBottomLeftRadius: '37px',
    borderBottomRightRadius: '37px',
    borderTop: 0,
  },
  mainImage2: {
    maxHeight: '100%',
    maxWidth: '100%',
    // opacity: 0.9,
    display: 'block',
    textAlign: 'center',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: '48px 0',
    color: '#2699b0',
    cursor: 'pointer',
    height: '100%',
    border: '2px solid #e95e2e',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#e95e2e',
      border: '2px solid #2699b0',
      color: 'white',
      '& $secondImageBackground': {
        border: '2px solid #2699b0',
        borderTop: 0,
      },
      '& $separator': {
        borderTop: '2px solid #2699b0',
      },
    },
  },
  mainContentTitle: {
    padding: '0 8px',
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  mainContentDescription: {
    padding: '8px 32px 0 32px',
  },
  separator: {
    borderTop: '2px solid #e95e2e',
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
}));

const Formations = ({ trainings = [] }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container>
            <Box mb={5}>
              <Title content="Nos" size="h4" bold letterspacing="2px" />
              <Title color="#2699b0" content="formations" size="h4" bold letterspacing="2px" />
            </Box>
          </Grid>
          <Grid
            container
            spacing={4}
            justify="center"
          >
            {trainings.map((training) => (
              <Grid item xs={12} md={4} align="center">
                <Link href={`/formations/${training.id}`}>
                  <Grid container justify="center" alignItems="center" className={classes.mainContainer}>
                    <div className={classes.mainContent}>
                      <div className={classes.mainContentTitle}>{training.titre}</div>
                      <div className={classes.separator}>
                        <div className={classes.mainContentDescription}>
                          <div>14h</div>
                          <div>4 demies journées</div>
                          <div>
                            {training.formation_categorie.type === 'Webinaire'
                              ? 'Webinaire'
                              : 'Présentiel'}
                          </div>
                        </div>
                      </div>
                      <div className={classes.secondImageBackground} />
                    </div>
                    <img
                      className={classes.secondImage}
                      src="/static/icons/P.Déplacement2.png"
                      alt=""
                    />
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box mt={4}>
            <Grid container>
              <Grid item xs={12} md={12} align="center">
                <Grid container justify="center" alignItems="center">
                  <img
                    className={classes.mainImage2}
                    src="/static/illus/two_teams.png"
                    alt="mobilite"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Formations;

export const getServerSideProps = async () => {
  const res = await fetch(getTrainings);
  const trainings = await res.json();
  return {
    props: { trainings },
  };
};
