import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { Image } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';

import { Banner, Header, FiguresSection, NewsSection } from "../components"

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  }
}))

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Banner />
        <Grid container spacing={1}>
          <Grid container item xs={12} md={9}
          >
            <Box>
              <img
                className={classes.mainImage}
                src="/static/icons/main_image.png"
                alt="mobilite"
              />
            </Box>
          </Grid>
          <Grid container item xs={12} md={3} alignItems="flex-end">
            <Box>
              <img
                className={classes.mainImage}
                src="/static/icons/PavéT1.png"
                alt="mobilite"
              />

            </Box>
          </Grid>
        </Grid>
        <FiguresSection />
        <NewsSection />
      </Container>
    </>
  );
}
