import { useEffect } from "react";
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { Layout, Title, HtmlContent } from "../../../components";
import Section from "../../../components/formation/Section";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "contain",
  },
  cartes: {
    margin: "16px 0",
  },
  link: {
    textDecoration: "none",
  },
  card: {
    position: "relative",
    width: "260px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    color: "#499ea0",
    cursor: "pointer",
    height: "100%",
    border: "2px solid #eca93b",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "#eca93b",
      border: "2px solid #499ea0",
      color: "white",
      "& $secondImageBackground": {
        border: "2px solid #499ea0",
        borderTop: 0,
      },
      "& $separator": {
        borderTop: "2px solid #499ea0",
      },
    },
  },
  cardContentTitle: {
    display: "flex",
    alignItems: "center",
    padding: "32px",
    position: "relative",
    fontSize: "24px",
    fontWeight: "bold",
    flex: "0 0 205px",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#499ea0",
    color: theme.palette.background.default,
    padding: "1em 2em",
    margin: "1rem",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#eca93b",
    },
  },
}));

const TIMS = (props) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        // behavior: 'smooth'
      });
    });
  }, []);

  const { titre, description, contact, cta } = props;

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Box mb={2}>
              <Title content={titre} size="h4" bold letterspacing="2px" />
            </Box>
          </Grid>
          <Box mt={1}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <img src="/tims.png" className={classes.img} alt="" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container justify="center" spacing={2}>
                  {cta
                    .filter((x) => !x["cta-tims"].Carte)
                    .map((x) => (
                      <a
                        key={x["cta-tims"].Label}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={x["cta-tims"].Url}
                        className={classes.button}
                      >
                        {x["cta-tims"].Label}
                      </a>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={4}>
                <HtmlContent content={description} />
              </Box>
            </Grid>
          </Grid>
          <Grid
            className={classes.cartes}
            container
            spacing={8}
            justify="center"
            alignItems="center"
          >
            {cta
              .filter((x) => x["cta-tims"].Carte)
              .map((x) => (
                <Grid item xs={12} md={4} align="center" key={x.id}>
                  <a
                    className={classes.link}
                    href={x["cta-tims"].Url}
                    target={x["cta-tims"].Internal ? undefined : "_blank"}
                    rel={
                      x["cta-tims"].Internal ? undefined : "noreferrer noopener"
                    }
                  >
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className={classes.card}
                    >
                      <div className={classes.cardContent}>
                        <div className={classes.cardContentTitle}>
                          {x["cta-tims"].Label}
                        </div>
                      </div>
                    </Grid>
                  </a>
                </Grid>
              ))}
          </Grid>
          {contact && (
            <Grid container spacing={2}>
              <Box mt={4} px={1}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  className={classes.contacts}
                >
                  <Grid item>
                    <Section
                      title="Agnès MESSAADI-PARIS"
                      subTitle="coordinatrice nationale ecomobilité inclusive du réseau Mob'In"
                      tims
                      index={1}
                    >
                      <a
                        href={`mailto:${contact}`}
                        target="_blank"
                        rel="noopener noreferer noreferrer"
                      >
                        {contact}
                      </a>
                    </Section>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async () => ({
  props: {
    titre: "TIMS, le programme pour une mobilité durable et solidaire »",
    description:
      "Le réseau Mob'In - les acteurs territoriaux de la mobilité inclusive pilote l'axe formation du PROGRAMME TIMS- \" *Territoires Inclusion Mobilité Sobriété*\". Le programme pour une mobilité durable et solidaire en consortium avec le réseau CLER, RARE ET AURA EE !\n" +
      "\n" +
      "\n" +
      "\n" +
      "[CLER-Réseau pour la transition énergétique](https://cler.org)\n" +
      "\n" +
      "[Auvergne-Rhône-Alpes Energie Environnement (AURA-EE)](https://www.auvergnerhonealpes-ee.fr)\n" +
      "\n" +
      "[RARE- Le réseau des Agences Régionales de l'Energie et de l'Environnement ](https://rare.fr)\n" +
      "\n" +
      "\n" +
      "**Notre objectif** : Relever le défi de l'ecomobilité inclusive en proposant un programme d'accompagnement aux changements de pratiques auprès des publics en précarité rencontrant des difficultés de mobilité et n’ayant pas accès à des services de déplacement adaptés. Nous souhaitons également former et informer les entreprises, les élus et les acteurs des territoires. \n" +
      "\n" +
      "**La mobilité au carrefour de nombreux enjeux**\n" +
      "\n" +
      "Le projet TIMS  a pour ambition de réduire l’impact écologique des transports et permettre l’accès à l’éducation, à l’emploi, aux soins, aux services, aux loisirs et à la culture.\n" +
      " \n" +
      "TIMS propose aux territoires de la France continentale et d’Outre-mer et à leur acteurs de les accompagner dans :\n" +
      "\n" +
      "- la formation et la mise en place d’un réseau de professionnels au croisement de la mobilité solidaire et de la mobilité durable,\n" +
      "- le développement d’actions locales afin de fédérer autour des collectivités territoriales les acteurs privés et associatif pour favoriser et massifier les solutions d’alternative à la voiture individuelle,\n" +
      "-  l’expérimentation de territoires aux politiques transversales.\n" +
      "\n" +
      "Notre réseau qui fédère les acteurs de la mobilité inclusive, solidaire et durable sous la forme d’organisations régionales a pour objectif d’accompagner les personnes en situation de fragilité vers une mobilité autonome et durable.\n" +
      "\n" +
      "**Rôle au sein de TIMS**\n" +
      "\n" +
      "- Une connaissance terrain du secteur de la mobilité inclusive\n" +
      "- Expertise pédagogique dans l’accompagnement individuel au changement dans le cadre de la mobilité des personnes en difficultés\n" +
      "- Expertise technique : sensibilisation, formation et professionnalisation\n" +
      "\n" +
      "\n" +
      "**Un programme porté par les acteurs de terrain**\n" +
      "\n" +
      "\n" +
      "Financé par les Certificats d’économie d’énergie (CEE), le programme TIMS s’adresse aux acteurs locaux qui souhaitent proposer sur leur territoire des solutions de mobilité à faibles impacts écologiques accessibles à toutes les populations, en particulier celles à faibles revenus, éloignées de solutions de mobilités. Pour rejoindre le programme et bénéficier d’un accompagnement méthodologique et financier, \n" +
      "\n" +
      " \n" +
      "**Pascal Grand,** directeur du réseau Mob’In -les acteurs territoriaux de la mobilité inclusive et solidaire\n" +
      " \n" +
      "*“Relever le défi d’une écomobilité inclusive impose un vaste programme d’accompagnement aux changements de pratiques. Il nous faut apporter de nouvelles solutions aux personnes en situation de précarité mais aussi former et informer les acteurs clés des territoires”*\n" +
      " \n" +
      "**Alexis Monteil-Gutel,** co-directeur du CLER-Réseau pour la transition énergétique\n" +
      " \n" +
      "*“ Dans le contexte d’urgence sociale et climatique, la voiture individuelle n’est plus possible. Il est absolument nécessaire de construire des alternatives avec les acteurs de terrain. Ils sont les mieux placés pour répondre aux besoins des ménages vulnérables et des territoires isolés.*”\n" +
      " \n" +
      "**Didier Chateau,** directeur d’Auvergne-Rhône-Alpes Énergie Environnement\n" +
      " \n" +
      "*\"L'agence Auvergne-Rhône-Alpes Énergie Environnement a acquis une expérience au cours des 6 dernières années à travers deux projets menés avec succès en région. Aujourd’hui, nous sommes heureux de mettre notre savoir-faire en matière d'accompagnement des territoires, au profit de TIMS, ce nouveau programme ambitieux.*”\n" +
      " \n" +
      "**Nadège Austin,** directrice du RARE, Réseau des Agences Régionales de l’Energie et de l’Environnement\n" +
      " \n" +
      "*“ Nous ne pouvons plus concevoir la mobilité uniquement comme une question de transport et de solutions technologiques. Il en faut, mais ce n’est pas suffisant. Toute une partie de la population doit avoir accès à cette mobilité durable. Nous avons une vision à long terme sur la structuration de ce secteur de l’écomobilité inclusive*.”\n",
    contact: "amessaadi-paris@mobin-solutions.fr",
    cta: [
      {
        "cta-tims": {
          Label: "Plus d'info sur les pilotes régionaux",
          Url: "mailto:lea.lesouder@cler.org",
          Carte: true,
        },
      },
      {
        "cta-tims": {
          Label: "Lauréats de l’AMI projets locaux",
          Url: "https://cler.org/wp-content/uploads/2024/01/cp-tims-janvier-2024.pdf",
          Carte: true,
        },
      },
      {
        "cta-tims": {
          Label: "Candidatez à l’AMI TEMI",
          Url: "https://www.mobin-solutions.fr/articles/160",
          Carte: true,
          Internal: true,
        },
      },
    ],
  },
});

export default TIMS;
