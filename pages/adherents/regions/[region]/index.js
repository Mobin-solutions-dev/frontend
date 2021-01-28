import { useState, useEffect } from 'react'
import { Container, Box, Grid, Table, TableBody, TableCell, FormControl, InputLabel, Select, MenuItem, Input } from '@material-ui/core'
import { Layout, Title, AdherentPreview } from '../../../../components'
import { useRouter } from 'next/router'
import { getDepartments, getAdherents, getCoordinateurs, filterAdherentsFromSelectedDepartments, getExpertises, filterAdherentsFromSelectedExpertises } from '../../../../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        // border: `1px ${theme.palette.orange.main} solid`,
        borderRadius: "10px",
        padding: "1em",
        marginBottom: '1em'
    },
    cell: {
        verticalAlign: 'top'
    },
    mainImage: {
        width: "100%",
        maxHeight: "200px",
        objectFit: "contain",
        marginBottom: '1em'
    },
    gridItem: {
        textAlign: "center",
        justifyContent: "center"
    },
    formControl: {
        margin: '1em',
        minWidth: "100%",
        // maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: "1em",
    },
    inputLabel: {
        fontSize: '15px'
    },
    grid: {
        // textAlign: 'center'
    }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Region = ({ departments = [], adherents = [], coordinateurs = [], expertises = [] }) => {
    const classes = useStyles()
    const router = useRouter()
    const { region } = router.query
    const [mainDepartementSelected, setMainDepartmentSelected] = useState([]);
    const [mainExpertiseSelected, setMainExpertiseSelected] = useState([]);

    const adherentsFiltered = adherents.filter(adh => adh ?.region_siege ?.nom_region === region)
    const [adherentsToDisplay, setAdherentsToDisplay] = useState(adherents.filter(adh => adh ?.region_siege ?.nom_region === region))
    const [adherentsToDisplayExpertise, setAdherentsToDisplayExpertise] = useState(adherents.filter(adh => adh ?.region_siege ?.nom_region === region))
    // Get filtered Departments
    const regionDepartments = departments.filter(dep => dep ?.region ?.nom_region === region)

    // Get filtered coordinateur
    const uniqueCoordinateur = coordinateurs.find(c => c ?.region ?.nom_region === region)

    const getStyles = (departement, mainDepartementSelected) => {
        return {
            fontWeight:
                mainDepartementSelected.indexOf(departement) === -1
                    ? "normal"
                    : "bold",
        };
    }

    const getStylesExp = (exp, mainExpertiseSelected) => {
        return {
            fontWeight:
                mainExpertiseSelected.indexOf(exp) === -1
                    ? "normal"
                    : "bold",
        };
    }


    useEffect(() => {
        const resultDeps = filterAdherentsFromSelectedDepartments(adherentsFiltered, mainDepartementSelected)
        setAdherentsToDisplay(resultDeps)
    }, [mainDepartementSelected])


    useEffect(() => {
        const resultExp = filterAdherentsFromSelectedExpertises(adherentsFiltered, mainExpertiseSelected)
        setAdherentsToDisplayExpertise(resultExp)
    }, [mainExpertiseSelected])


    // Get filtered Regions
    const regionAdherents = adherentsToDisplay.filter(element => adherentsToDisplayExpertise.includes(element))

    return (
        <Layout>
            <Box mt={7}>
                <Container maxWidth="md">
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Box mb={5}>
                                <Title content={region} size="h4" uppercase bold letterspacing="2px" />
                            </Box>
                        </Grid>
                    </Grid>
                    {
                        uniqueCoordinateur ?.logo && (
                            <Grid container>
                                <Grid item xs={12}>
                                    {
                                        uniqueCoordinateur.logo && (
                                            <img
                                                className={classes.mainImage}
                                                src={uniqueCoordinateur ?.logo ?.url}
                                                alt="mobilite"
                                            />
                                        )
                                    }

                                </Grid>
                            </Grid>
                        )
                    }
                    {
                        uniqueCoordinateur && (
                            <Grid container spacing={3}>
                                <Grid item className={classes.gridItem} xs={12} sm={12} md={12}>
                                    <Box className={classes.banner}>
                                        <Table>
                                            <TableBody>
                                                <TableCell className={classes.cell} align="right">
                                                    <Title
                                                        fontSize="16px"
                                                        color="black"
                                                        bold
                                                        content="Président de région" />
                                                </TableCell>
                                                <TableCell>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="16px"
                                                            color="#2699b0"
                                                            bold
                                                            content={uniqueCoordinateur.nom_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.telephone_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.email_president || ""} />
                                                    </Box>
                                                </TableCell>
                                            </TableBody>

                                            <TableBody>
                                                <TableCell className={classes.cell} align="right">
                                                    <Title
                                                        fontSize="16px"
                                                        color="black"
                                                        bold
                                                        content="Co-Président de région" />
                                                </TableCell>
                                                <TableCell>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="16px"
                                                            color="#2699b0"
                                                            bold
                                                            content={uniqueCoordinateur.nom_co_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.telephone_co_president || ""} />
                                                    </Box>
                                                    <Box mb={1}>
                                                        <Title
                                                            fontSize="13px"
                                                            color="black"
                                                            bold
                                                            content={uniqueCoordinateur.email_co_president || ""} />
                                                    </Box>
                                                </TableCell>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Grid>
                            </Grid>
                        )
                    }


                    <Box mb={5}>
                        <Title
                            color="black"
                            content="Toutes les structures" size="h6" uppercase bold letterspacing="2px" />
                        <Title
                            color="black"
                            content="Filtrer les résultats :" size="h6" uppercase italic bold letterspacing="2px" fontSize="12px" />
                        <Grid container>
                            <Grid item xs={12} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className={classes.inputLabel}>Département du siège</InputLabel>
                                    <Select
                                        multiple
                                        value={mainDepartementSelected}
                                        // onChange={handleChangeDepartment}
                                        onChange={(event) => setMainDepartmentSelected(event.target.value)}
                                        input={<Input />}
                                        MenuProps={MenuProps}
                                    >
                                        {regionDepartments.map((dep, index) => (
                                            <MenuItem key={index} value={dep.nom_departement} style={getStyles(dep.nom_departement, mainDepartementSelected)}>
                                                {dep.nom_departement}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel className={classes.inputLabel}>Expertise</InputLabel>
                                    <Select
                                        multiple
                                        value={mainExpertiseSelected}
                                        // onChange={handleChangeDepartment}
                                        onChange={(event) => setMainExpertiseSelected(event.target.value)}
                                        input={<Input />}
                                        MenuProps={MenuProps}
                                    >
                                        {expertises.map((exp, index) => (
                                            <MenuItem key={index} value={exp.type} style={getStylesExp(exp.type, mainExpertiseSelected)}>
                                                {exp.type}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </Grid>
                        </Grid>
                        {
                            regionDepartments.map((dep, index) => (
                                <Box key={index} mt={3}>
                                    <Box>
                                        <Title
                                            color="black"
                                            content={dep.nom_departement || ""} size="h6" uppercase bold letterspacing="2px" fontSize="12px" />
                                    </Box>
                                    <Grid container>
                                        {
                                            regionAdherents.filter(adh => adh.departement_siege.nom_departement === dep.nom_departement).map((d, i) => (
                                                <AdherentPreview key={i} adherent={d} />
                                            ))
                                        }
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Box>
                    {/* </Grid> */}
                </Container>
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(getDepartments)
    const departments = await res.json()
    const res2 = await fetch(getAdherents)
    const adherents = await res2.json()
    const res3 = await fetch(getCoordinateurs)
    const coordinateurs = await res3.json()
    const res4 = await fetch(getExpertises)
    const expertises = await res4.json()
    return {
        props: { departments, adherents, coordinateurs, expertises }
    };
}

export default Region