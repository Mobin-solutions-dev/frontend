import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { Image } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';

import { Banner, Layout, FiguresSection, NewsSection, NewsletterSection, Title, Text } from "../components"
import { getNews } from '../utils'

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    opacity: 0.3,
    display: "block"
  },
  container: {
    position: "relative",
    textAlign: "center",
    display: "inline-block"
  },
  imageText: {
    // backgroundColor: theme.palette.background.default,
    // opacity: 0.7,
    padding: '5px',
    borderRadiux: "50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "650px",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    // width: "100%",
    // height: "100%",
    // minHeight: "500px",
    "@media (min-width: 960px)": {
      background: `url(static/icons/main_image2.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      opacity: 0.3,
      width: "100%",
      height: "100%",
      minHeight: "650px",
    },
    "@media (max-width: 960px)": {
      backgroundColor: theme.palette.blue.main,
      opacity: 0.1,
      border: `20px solid ${theme.palette.blue.main}`,
      borderRadius: "10px",
      minHeight: "300px",
      width: "100%",
      height: "100%",

    }
  },
  text: {
    position: "absolute",
    paddingTop: "5%",
    top: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "5vw",
    "@media (min-width: 1200px)": {
      fontSize: "60px"
    }
  },
  title: {
    "@media (min-width: 960px)": {
      marginLeft: '2em',
      marginRight: '2em'
    }
  },
  mainImage2: {
    // maxHeight: '100%',
    maxWidth: '100%',
    // opacity: 0.9,
    display: "block",
    textAlign: 'center'
  },
  mainBox: {
    minHeight: '100%',
    maxHeight: '100%',
  },
  flexBox: {
    display: "flex",
    alignItems: 'center'
  }
}))

const Home = ({ news = [] }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="xl">
        <section>
          <Banner />
          <Grid container>
            <Grid item xs={12} md={12} align="center">
              <Grid container justify="center" alignItems="center">
                <Box className={classes.mainBox}>
                  <img
                    className={classes.mainImage2}
                    src="/static/illus/main_image_texte.png"
                    alt="mobilite"
                  />
                  <Grid container justify="center">
                    <Box mb={3} mt={3} className={classes.flexBox}>
                      <Text center size="h4" color="#2699b0" bold>
                        <span style={{ fontStyle: "italic" }}>Vers une mobilité</span> <span style={{ fontStyle: "italic", color: "#e95e2e" }}>autonome et durable</span>
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* <div className={classes.wrapper}>
            <div className={classes.image}></div>
            <div className={classes.text}>
              <Banner />
              <Box className={classes.title}>
                <Title letterspacing="1px" color="#e95e2e" size="h3" bold content="Les acteurs territoriaux de la mobilité inclusive" />
              </Box>
            </div>
          </div> */}
        </section>
        <section id="figures">
          <FiguresSection />
        </section>
        <section id="news">
          <NewsSection news={news} />
        </section>
        <section id="newsletter">
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
