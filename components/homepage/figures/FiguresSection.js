import { Container, Grid, Box } from "@material-ui/core";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { makeStyles } from "@material-ui/core/styles";
import { Title, Icon } from "../../global";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "1em",
    backgroundColor: theme.palette.gray.main,
    borderRadius: "10px",
    paddingRight: "1em",
  },
  iconSection: {
    paddingBottom: "10px",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
}));
const FiguresSection = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box pt={10} pb={10}>
        <Grid>
          <Box mb={3} className={classes.flexBox}>
            <Box mr={1}>
              <Title
                color="#2699b0"
                content="Les"
                size="h3"
                bold
                letterspacing="2px"
              />
            </Box>
            <Title content="chiffres" size="h3" bold letterspacing="2px" />
          </Box>
          <Box pt={5} pb={5} className={classes.box}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  className={classes.iconSection}
                >
                  <Icon src="/static/icons/P.reçus.png" maxWidth="180px" />
                  <Title
                    bold
                    size="h3"
                    content={
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? (
                              <CountUp separator=" " end={130000} />
                            ) : (
                              "130000"
                            )}
                          </div>
                        )}
                      </VisibilitySensor>
                    }
                    color="black"
                  />
                </Box>
                <Box pl={4}>
                  <Title
                    content="Nombre de personnes reçues en 2023"
                    color="black"
                    size="h6"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  className={classes.iconSection}
                >
                  <Icon
                    src="/static/icons/P.conseillers.png"
                    maxWidth="180px"
                  />
                  <Title
                    bold
                    size="h3"
                    content={
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={229} /> : "229"}</div>
                        )}
                      </VisibilitySensor>
                    }
                    color="black"
                  />
                </Box>
                <Box pl={4}>
                  <Title
                    content="Nombre de conseiller.ère.s mobilité en 2023"
                    color="black"
                    size="h6"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  className={classes.iconSection}
                >
                  <Icon src="/static/icons/P.location.png" maxWidth="180px" />
                  <Title
                    bold
                    size="h3"
                    content={
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? (
                              <CountUp separator=" " end={430523} />
                            ) : (
                              "430523"
                            )}
                          </div>
                        )}
                      </VisibilitySensor>
                    }
                    color="black"
                  />
                </Box>
                <Box pl={4}>
                  <Title
                    content="Nombre de jours de location en 2022"
                    color="black"
                    size="h6"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  className={classes.iconSection}
                >
                  <Icon src="/static/icons/P.Adherents2.png" maxWidth="180px" />
                  <Title
                    bold
                    size="h3"
                    content={
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={279} /> : "279"}</div>
                        )}
                      </VisibilitySensor>
                    }
                    color="black"
                  />
                </Box>
                <Box pl={4}>
                  <Title
                    content="Nombre d'adhérents en 2024"
                    color="black"
                    size="h6"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default FiguresSection;
