import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { Image } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';

import { Banner, Layout, FiguresSection, NewsSection, NewsletterSection, Title } from "../components"
import { getNews } from '../utils'

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    opacity: 0.3
  },
  container: {
    position: "relative",
    textAlign: "center"
  },
  imageText: {
    // backgroundColor: theme.palette.background.default,
    // opacity: 0.7,
    padding: '5px',
    borderRadiux: "50px",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
  // mainTitleBox: {
  //   backgroundImage: `url(static/icons/main_image.png)`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   minHeight: '600px'
  // },
  // box: {
  //   textAlign: "center",
  //   alignContent: 'center'
  // }
}))

const Home = ({ news = [] }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="xl">
        {/* <Banner /> */}
        <Grid container>
          <Grid container item xs={12} md={12}
          >
            <Box className={classes.container}>
              <img
                className={classes.mainImage}
                src="/static/icons/main_image.png"
                alt="mobilite"
              />
              <Box className={classes.imageText}>
                <Banner />

                <Title letterspacing="1px" color="#e95e2e" size="h2" bold content="Les acteurs territoriaux de la mobilité inclusive" />
              </Box>

            </Box>
          </Grid>
        </Grid>
        <section id="figures">
          <FiguresSection />
        </section>
        <section id="news">
          <NewsSection news={news} />
        </section>
        <section id="news">
          <NewsletterSection />
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
