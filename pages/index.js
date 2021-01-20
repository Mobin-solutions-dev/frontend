import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { Image } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';

import { Banner, Layout, FiguresSection, NewsSection } from "../components"
import { getNews } from '../utils'

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  }
}))

const Home = ({ news = [] }) => {
  console.log(news)
  const classes = useStyles();

  return (
    <Layout>
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
            <Box display={{ xs: 'none', md: 'block' }}>
              <img
                className={classes.mainImage}
                src="/static/icons/PavéT1.png"
                alt="mobilite"
              />

            </Box>
          </Grid>
        </Grid>
        <section id="figures">
          <FiguresSection />
        </section>
        <section id="news">
          <NewsSection news={news} />
        </section>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(getNews)
  let news = await res.json()
  let newsSorted = news.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  let newsSliced = newsSorted.slice(0, 4)
  return {
    props: { news: newsSliced }
  };
}

export default Home
