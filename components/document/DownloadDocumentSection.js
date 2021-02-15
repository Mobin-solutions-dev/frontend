import { Grid, Box, Divider } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';

const DownloadDocumentSection = ({ document }) => {

    const { title = "" } = document

    return (
        <Grid item xs={12} md={6}>
            <Box>
                <Box>
                    <GetAppIcon />
                </Box>
                <Box>
                    {title}
                </Box>
            </Box>
            <Divider color="#e95e2e" />
        </Grid>
    )

}

export default DownloadDocumentSection