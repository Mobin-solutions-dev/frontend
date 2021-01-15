import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
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
  },
});

theme = responsiveFontSizes(theme)


export default theme;
