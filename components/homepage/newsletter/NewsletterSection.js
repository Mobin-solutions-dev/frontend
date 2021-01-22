import { useState } from 'react'
import { Container, Grid, Box, Button, FormControl, OutlinedInput, InputLabel } from '@material-ui/core'
import { Title, Text } from '../../global'
import { makeStyles } from '@material-ui/core/styles';
import { createContactEmail } from '../../../src/services/sendEmail'

const useStyles = makeStyles((theme) => ({
    grid: {
        textAlign: 'center'
    },
    box: {
        border: `2px ${theme.palette.orange.main} solid`,
        borderRadius: "10px",
        padding: "2em"
    },
    textField: {
        color: theme.palette.orange.main
    },
    form: {
        marginTop: '1em',
    },
    formGrid: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    btn: {
        color: "#2699b0",
        borderColor: theme.palette.orange.main,
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: "#fff",
            border: 'none'
        }
    },
}))
const FiguresSection = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleClick = async () => {
        setErrorMessage(null)

        if (!validateEmail(email)) {
            setErrorMessage("Merci de saisir une adresse email valide.")
            return
        }

        let variables = {
            email
        }
        let response = await createContactEmail(variables);

        if (response) {
            setEmail("")
            alert("Votre email a été enregistré !")
        } else {
            alert("Une erreur s'est produite.")
        }
    }

    return (
        <Container>
            <Box pt={10} pb={10}>
                <Grid container>
                    <Grid item xs={12} md={12} className={classes.grid}>
                        <Box className={classes.box}>
                            <Title content="Vous souhaitez être tenu au courant des actualités du réseau ?" size="h6" uppercase bold letterspacing="2px" />
                            <Text size="body1" bold color="#2699b0">
                                Inscrivez-vous à notre newsletter mensuelle !
                            </Text>
                            {/* <FormControl fullWidth variant="outlined" className={classes.form}>
                                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                <OutlinedInput
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    labelWidth={60}
                                />
                            </FormControl> */}
                            <Grid container justify="center">
                                <Grid item xs={12} md={8} className={classes.formGrid}>
                                    <FormControl fullWidth variant="outlined" className={classes.form}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                        <OutlinedInput
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
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

                                    <Box mt={2}>
                                        <Button
                                            className={classes.btn}
                                            variant="outlined"
                                            onClick={() => handleClick()}>
                                            Valider
                                     </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default FiguresSection