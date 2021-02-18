import { useState, useCallback, useContext } from 'react'
import AppContext from "../../../context/AppContext";

import { Container, Box, Grid, LinearProgress, Button, Paper, Divider, TextField, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core'
import { Layout, Text } from '../../../components'
import { getThemes } from '../../../utils'
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import { postDocumentAdherent } from '../../../lib/ressources'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "2em",
        border: `2px solid ${theme.palette.grey.main}`
    },
    paper2: {
        padding: "2em",
        border: `0.5px solid ${theme.palette.blue.main}`
    },
    flexBox: {
        display: "flex",
        alignItems: 'center'
    },
    textField: {
        minWidth: "100%",
    },
    textFieldBox: {
        // textAlign: 'center'
    },
    btnBox: {
        textAlign: 'center'
    },
    btn: {
        paddingLeft: '2em',
        paddingRight: '2em',
        color: theme.palette.blue.main,
        fontWeight: 'bold',
        letterSpacing: '2px',
        borderColor: theme.palette.grey.main,
        borderRadius: "1.5em",
        '&:hover': {
            backgroundColor: theme.palette.golden.main,
            color: "#fff",
            border: 'none'
        }
    }
}))

const PrivateShareDocument = ({ themes = [] }) => {
    const classes = useStyles();
    const { user, isAuthenticated } = useContext(AppContext);
    console.log("user", user)

    const [variables, setVariables] = useState({
        titre: "",
        thematique: "",
        file: null
    })
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)

    const onDrop = useCallback(acceptedFiles => {
        setVariables({ ...variables, file: acceptedFiles[0] })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.pdf'
    })


    const onSubmit = async () => {
        setLoader(true)
        const { titre, thematique, file } = variables
        setError(null)

        if (titre.length < 1) {
            setLoader(false)
            setError("Un titre de document doit être saisi.")
            return
        }

        if (thematique.length < 1) {
            setLoader(false)
            setError("Merci de choisir une thématique.")
            return
        }

        if (!file) {
            setLoader(false)
            setError("Merci de télécharger un document pdf.")
            return
        }

        try {
            const response = await postDocumentAdherent(variables)
            console.log("response compo", response)
            setLoader(false)
        } catch (error) {
            console.log(error)
            setLoader(false)
            setError("Impossible de télécharger le document. Veuillez réessayer.")
        }

    }

    if (loader) return (
        <LinearProgress color="primary" />
    )

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={10} md={8}>
                            <Paper className={classes.paper}>
                                <Box mb={4}>
                                    <Text size="h5" letterspacing="2px" bold>
                                        <span style={{ color: "#e95e2e" }}>Proposer une ressource</span> <span style={{ color: "#2699b0" }}>au réseau</span>
                                    </Text>
                                </Box>
                                <Divider color="#b1b3b4" />
                                <Box mt={3} mb={2} className={classes.textFieldBox}
                                >
                                    <Box mt={2} mb={2}>
                                        <Text bold size="body2">
                                            Téléverser un fichier
                                        </Text>
                                    </Box>
                                    <Box mb={2}>
                                        <TextField
                                            value={variables.titre}
                                            onChange={(event) => setVariables({ ...variables, titre: event.target.value })}
                                            label="Titre"
                                            variant="outlined"
                                            size="small"
                                            className={classes.textField}
                                        />
                                    </Box>
                                    <Box mb={3}>
                                        <FormControl
                                            className={classes.textField}
                                        >
                                            <InputLabel>Thème</InputLabel>
                                            <Select
                                                value={variables.thematique}
                                                onChange={(event) => setVariables({ ...variables, thematique: event.target.value })}

                                            >
                                                {
                                                    themes.map((t, i) => (
                                                        <MenuItem key={i} value={t.titre}>{t.titre}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <Paper className={classes.paper2}>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {
                                                    isDragActive ?
                                                        <Text>Téléversez votre fichier PDF ici</Text> :
                                                        <Text>Téléversez votre fichier PDF ici</Text>
                                                }
                                                {
                                                    variables.file && (
                                                        <Text bold>{variables?.file?.name}</Text>
                                                    )
                                                }
                                            </div>
                                        </Paper>
                                    </Box>
                                </Box>
                                {
                                    error && (
                                        <Box mt={3} mb={2}>
                                            <Text size="body1" bold color="#e5352c">
                                                {error}
                                            </Text>
                                        </Box>
                                    )
                                }
                                <Box mt={3} mb={2} className={classes.btnBox}
                                >
                                    <Button className={classes.btn} variant="outlined" onClick={() => onSubmit()}>
                                        Valider
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(getThemes)
    const themes = await res.json()

    return {
        props: { themes }
    };
}


export default PrivateShareDocument