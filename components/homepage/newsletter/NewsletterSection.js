import { useState } from 'react';
import {
  Container, Grid, Box, Button, FormControl, OutlinedInput, InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Title, Text } from '../../global';
import { createContactEmail } from '../../../src/services/sendEmail';

const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
  },
  box: {
    border: `2px ${theme.palette.orange.main} solid`,
    borderRadius: '10px',
    padding: '2em',
    backgroundColor: theme.palette.background.default,

  },
  textField: {
    color: theme.palette.orange.main,
  },
  form: {
    marginTop: '1em',
  },
  formGrid: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    fontWeight: 'bold',
    color: '#2699b0',
    borderColor: theme.palette.orange.main,
    '&:hover': {
      backgroundColor: theme.palette.golden.main,
      color: '#fff',
      borderColor: theme.palette.golden.main,
    },
  },
  transparentBox: {
    marginTop: '1em',
    borderRadius: '10px',
    padding: '4em',

  },
  greyBox: {
    marginTop: '1em',
    backgroundColor: theme.palette.gray.main,
    borderRadius: '10px',
    padding: '4em',
  },
}));

const NewsletterSection = ({ formation }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('Merci de saisir une adresse email valide.');
      return;
    }

    const variables = {
      email,
    };
    const response = await createContactEmail(variables, formation);

    if (response) {
      setEmail('');
      setSuccessMessage('Votre email a été enregistré !');
    } else {
      setErrorMessage("Une erreur s'est produite.");
    }
  };

  return (
    <Container>
      <Box className={formation ? classes.transparentBox : classes.greyBox}>
        <Grid container>
          <Grid item xs={12} md={12} className={classes.grid}>
            <Box className={classes.box}>
              <Box mb={3}>
                <Title color="#2699b0" content={formation ? 'Vous souhaitez être tenu.e au courant des actualités de nos formations ?' : 'Vous souhaitez être tenu.e au courant des actualités du réseau ?'} size="h6" bold letterspacing="2px" />
              </Box>
              <Title color="#e95e2e" content={formation ? 'Inscrivez-vous à notre newsletter !' : 'Inscrivez-vous à notre newsletter mensuelle !'} size="body1" uppercase bold letterspacing="2px" />
              <Grid container justify="center">
                <Grid item xs={12} md={8} className={classes.formGrid}>
                  <form onSubmit={handleClick}>
                  <FormControl fullWidth variant="outlined" className={classes.form}>
                    <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      labelWidth={60}
                    />
                  </FormControl>
                  {
                      errorMessage && (
                      <Box mb={2}>
                        <Text color="#e5352c">{errorMessage}</Text>
                      </Box>
                      )
                  }
                  {successMessage && (
                      <Box mb={2}>
                      <Text color="#4ba829">{successMessage}</Text>
                    </Box>
                  )}
                  <Box mt={2}>
                    <Button
                      type="submit"
                      className={classes.btn}
                      variant="outlined"
                    >
                      Valider
                    </Button>
                  </Box>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewsletterSection;
