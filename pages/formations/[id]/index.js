import {
  Container, Box, Grid, makeStyles,
} from '@material-ui/core';
import {
  Layout, Title, HtmlContent, Text,
} from '../../../components';
import Section from '../../../components/formation/section';
import { getTraining } from '../../../utils';

const useStyles = makeStyles(() => ({
  subTitle: {
    marginTop: '8px',
    fontWeight: 'bold',
  },
}));

const Formation = ({ training = {} }) => {
  const classes = useStyles();
  const {
    titre = '',
    document_pdf = null,
    HTML = [],
    eligible_opco,
    contacts,
    footer,
  } = training;

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Box mb={4}>
              <Title content={titre} size="h4" uppercase bold letterspacing="2px" />
              {eligible_opco && (
              <div className={classes.subTitle}>
                Eligible au financement par des OPCO.
              </div>
              )}
              {document_pdf && (
              <div className={classes.subTitle}>
                <a target="_blank" href={document_pdf?.url} rel="noreferrer">Télécharger le document de présentation</a>
              </div>
              )}
            </Box>
          </Grid>
          <Grid container spacing={2}>
            {HTML && HTML.map((section, index) => (
              <Grid item key={section.Titre} xs={12}>
                <Section
                  title={section.Titre}
                  description={section.Content}
                  index={index}
                />
              </Grid>
            ))}
            {contacts && (
              <Box mt={4}>
                <Grid container spacing={2}>
                  {contacts.map(({ contact }, index) => (
                    <Grid item key={contact.Nom}>
                      <Section
                        title={contact.Nom}
                        subTitle={contact.Fonction}
                        index={index}
                      >
                        <div>{contact.Telephone}</div>
                        <a href={`mailto:${contact.Email}`}>{contact.Email}</a>
                      </Section>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
            {footer && (
            <Box mt={4}>
              <div>
                Pour retrouver le contenu de notre webinaire :
                <ul>
                  <li>
                    si vous êtes adhérent Mob&lsquo;In :
                    retrouver le replay dans votre accès privé dans la rubrique
                    &ldquo;outils de formation&ldquo;
                  </li>
                  <li>
                    si vous n&lsquo;êtes pas adhérent : n&lsquo;hésitez pas à nous contacter
                  </li>
                </ul>
              </div>
            </Box>
            )}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(getTraining(id));
  const training = await res.json();
  return {
    props: { training },
  };
};

export default Formation;
