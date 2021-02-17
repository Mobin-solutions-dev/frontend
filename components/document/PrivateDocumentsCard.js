import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        maxHeight: '300px',
        maxWidth: 'auto',
        // opacity: 0.9,
        display: "block",
        textAlign: 'center',
    },
    // container: {
    //     position: "relative",
    //     textAlign: "center",
    //     color: "white",
    // },
    // bottomRight: {
    //     position: "absolute",
    //     bottom: "8px",
    //     right: "16px"
    // }
}))
const PrivateDocumentsCard = ({ section = {} }) => {
    const classes = useStyles()
    return (
        <>
            <Link href={section.route}>
                <a>
                    <img
                        className={classes.mainImage}
                        src="/static/cadres/presentiel.png"
                        alt="mobilite"
                    />
                </a>
            </Link>
            {section.title}
        </>

    )
}

export default PrivateDocumentsCard