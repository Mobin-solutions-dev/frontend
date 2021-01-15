import { Card, Button, CardContent, Box, Grid } from '@material-ui/core';
import { Title, Text, Icon } from '../../global'
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from "@material-ui/icons/ArrowRight"
import Moment from 'react-moment';
import Image from 'next/image'
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({
    box: {
        zIndex: 0,
        position: "relative"
    },
    card: {
        // height: '400px',
        border: `2px ${theme.palette.orange.main} solid`,
        borderRadius: "10px",
        position: "relative",
        zIndex: 1,
        // borderColor: theme.palette.orange.main
    },
    media: {
        height: 150,
    },
    articleTitleContainer: {
        height: 150,
        overflow: "hidden",
        maxWidth: "250px"
    },
    wrapper: {
        webkitColumnWidth: "220px",
        columnWidth: "250px",
        height: "100%",
        textAlign: "left"
    },
    btn: {
        color: "black",
        borderColor: theme.palette.orange.main,
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: "#fff",
            border: 'none'
        }
    }

}))

const NewsCardSummary = ({ newsItem = {} }) => {
    const classes = useStyles();

    const { contenu_article, image_principale, titre_article, created_at, id } = newsItem

    const handleSeeArticle = (id) => Router.push(`/articles/${id}`)
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
                                        <Title content={titre_article} size="h6" uppercase bold letterspacing="1px" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <Box mt={1}>
                                    <Image
                                        src={image_principale ?.formats ?.medium ?.url}
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box pt={3}>
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
    )
}

export default NewsCardSummary