import {
  Card, Button, CardContent, Box, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Moment from 'react-moment';
import Image from 'next/image';
import Router from 'next/router';
import { Title, Text, Icon } from '../../global';

const useStyles = makeStyles((theme) => ({
  box: {
    zIndex: 0,
    position: 'relative',
  },
  card: {
    // height: '400px',
    border: `2px ${theme.palette.orange.main} solid`,
    borderRadius: '10px',
    position: 'relative',
    zIndex: 1,
    // borderColor: theme.palette.orange.main
  },
  media: {
    height: 150,
  },
  articleTitleContainer: {
    height: 150,
    overflow: 'hidden',
    maxWidth: '250px',
  },
  wrapper: {
    webkitColumnWidth: '220px',
    columnWidth: '250px',
    height: '100%',
    // textAlign: "left",
    // textAlign: "center"
  },
  btn: {
    color: 'black',
    fontWeight: 'bold',
    borderColor: theme.palette.orange.main,
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#fff',
      borderColor: theme.palette.golden.main,
    },
  },
  img: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
  },

}));

const NewsCardSummary = ({ newsItem = {} }) => {
  const classes = useStyles();

  const {
    contenu_article = '', image_principale = undefined, titre_article = '', created_at = '', id = '',
  } = newsItem;

  const handleSeeArticle = (id) => Router.push(`/articles/${id}`);
  return (
    <Box mt={3} mb={4} mr={3} className={classes.box}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Text bold size="body2"><Moment format="DD/MM/YYYY">{created_at}</Moment></Text>
          <Box mt={3}>
            <Grid container>
              <Grid item xs={6} md={12}>
                <Box className={classes.articleTitleContainer} mr={2}>
                  <Box className={classes.wrapper}>
                    <Title content={titre_article} size="body1" bold letterspacing="1px" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={12}>
                {
                                    image_principale && (
                                    <img
                                      className={classes.img}
                                      src={image_principale.url}
                                    />
                                    )
                                }
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box pt={3} style={{ textAlign: 'center' }}>
                  <Button className={classes.btn} variant="outlined" onClick={() => handleSeeArticle(id)}>
                    En savoir plus
                    <ArrowRight />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsCardSummary;
