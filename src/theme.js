import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
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
      main: "#FF7F00"
    },
    red: {
      main: "#5352c"
    },
    golden: {
      main: "#f29400"
    },
    green: {
      main: "#4ba829"
    },
  },
});

export default theme;
