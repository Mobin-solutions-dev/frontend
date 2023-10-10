import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, Title, Text } from "../../components";
import { sendMail } from "../../src/services/sendEmail";
import { getContactEmails } from "../../utils";
import BetaContact from "./betaContact";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
  btn: {
    color: "black",
    borderColor: theme.palette.orange.main,
    "&:hover": {
      backgroundColor: theme.palette.golden.main,
      color: "#fff",
      borderColor: theme.palette.golden.main,
    },
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
}));

const Contact = ({ contactEmails = [] }) => {
  const classes = useStyles();

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [senderEmail, setSenderEmail] = useState("");
  const [user, setUser] = useState("");
  const [errorSenderEmail, setErrorSenderEmail] = useState(null);

  const minCharacters = 10;

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleClick = async () => {
    setErrorMessage(null);
    setErrorSenderEmail(null);
    if (!user) {
      setErrorMessage("Veuillez preciser qui vous êtes.");
      return;
    }
    if (message.length < minCharacters) {
      setErrorMessage(
        `Votre message doit contenir au moins ${minCharacters} caractères.`
      );
      return;
    }

    if (!validateEmail(senderEmail)) {
      setErrorSenderEmail("Merci de saisir votre email de contact.");
      return;
    }

    const emails = contactEmails.map((e) => ({ email: e.email }));
    const variables = {
      message,
      emails,
      senderEmail,
    };
    const response = await sendMail(variables);

    if (response) {
      setMessage("");
      setSenderEmail("");
      alert("Message envoyé !");
    } else {
      alert("Erreur dans l'envoi du message. Veuillez recommencer.");
    }
  };

  return (
    <Layout>
      <Box mt={7}>
        <Container maxWidth="lg">
          <Grid container>
            <Box mb={3} className={classes.flexBox}>
              <Title
                color="#2699b0"
                content="Contactez-"
                size="h4"
                bold
                letterspacing="2px"
              />
              <Title content="nous" size="h4" bold letterspacing="2px" />
            </Box>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={8} md={3}>
              <Box mt={2} mb={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Vous êtes
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Vous êtes"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  >
                    <MenuItem value="interesse">
                      Intéressé·e pour devenir partenaire du Réseau Mob’In
                    </MenuItem>
                    <MenuItem value="porteur">
                      Porteur de projet de mobilité solidaire
                    </MenuItem>
                    <MenuItem value="accompagnateur">
                      Accompagnateur ou professionnel de l’insertion
                    </MenuItem>
                    <MenuItem value="collectivite">
                      Collectivité territoriale
                    </MenuItem>
                    <MenuItem value="other">Autres</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          {user === "accompagnateur" ? (
            <BetaContact />
          ) : (
            <>
              <Grid container>
                <Grid item xs={12} sm={8} md={3}>
                  <Box mt={2} mb={4}>
                    <TextField
                      className={classes.textField}
                      label="Saisissez votre email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      variant="outlined"
                    />
                  </Box>
                  <Box mb={4}>
                    <Text color="#e5352c">{errorSenderEmail}</Text>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Box mt={2} mb={4}>
                    <TextField
                      className={classes.textField}
                      label="Ecrivez-nous ici votre demande"
                      multiline
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      variant="outlined"
                    />
                  </Box>
                  <Box mb={4}>
                    <Text color="#e5352c">{errorMessage}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mb={4}>
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      onClick={() => handleClick()}
                    >
                      Envoyer
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(getContactEmails);
  const emails = await res.json();
  return {
    props: { contactEmails: emails },
  };
};

export default Contact;
