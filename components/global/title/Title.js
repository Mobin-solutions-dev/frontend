import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const Title = ({ size, color, uppercase, content, bold, letterspacing, fontSize }) => {

    const useStyles = makeStyles((theme) => ({
        title: {
            color: color ? color : theme.palette.orange.main,
            textTransform: uppercase ? "uppercase" : undefined,
            fontWeight: bold ? 'bold' : undefined,
            letterSpacing: letterspacing ? letterspacing : '0px',
            fontSize: fontSize ? fontSize : undefined
        }
    }))
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant={size ? size : "h6"}>{content}</Typography>
    )
}

export default Title