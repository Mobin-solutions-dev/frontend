import { Container, Typography, Box, Grid } from '@material-ui/core';

import { Icon } from '../../global'

const Banner = ({ }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box pt={3} pb={3}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item>
                            {/* <div> */}
                            <Icon
                                maxWidth="100px"
                                src="/static/icons/P.Adhérents.png" />
                            {/* </div> */}
                            <Box>
                                <Typography variant="h6">NOS ADHERENTS</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            {/* <div> */}
                            <Icon
                                maxWidth="100px"
                                src="/static/icons/P.chiffres.png" />
                            {/* </div> */}
                            <Box>
                                <Typography variant="h6">NOS CHIFFRES</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            {/* <div> */}
                            <Icon
                                maxWidth="100px"
                                src="/static/icons/P.actus.png" />
                            {/* </div> */}
                            <Box>
                                <Typography variant="h6">NOS ACTUS</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Banner