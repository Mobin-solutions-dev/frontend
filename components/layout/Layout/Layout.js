import { Header } from '../Header'
import { Footer } from '../Footer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        minHeight: "100vh",
        // width: "100%"
    },
    content: {
        paddingBottom: "3em"
    },
    footer: {
        position: "absolute",
        width: "100%"
        // left: 0,
        // bottom: 0,
        // right: 0
    }

}))

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Header />
                <div className={classes.body}>
                    {children}
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout