import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2699b0',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    blue: {
      main: "#2699b0"
    },
    orange: {
      main: "#e95e2e"
    },
    red: {
      main: "#e5352c"
    },
    golden: {
      main: "#f29400"
    },
    green: {
      main: "#4ba829"
    },
    gray: {
      main: "#ecf0f1"
    },
    black: {
      main: "#000000"
    }
  },
});

theme = responsiveFontSizes(theme)


export default theme;
