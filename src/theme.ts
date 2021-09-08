import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#172B36',
    },
    secondary: {
      main: '#F48847',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
