import { Grid, ThemeProvider, createTheme } from '@mui/material';
import {
    HashRouter as Router,
} from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './App.scss';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { teal, red } from '@mui/material/colors';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[500],
      },
      secondary: {
        main: red[900],
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid
          className="app"
            item
            xs={12}
            md={8}
            sx={{
              '& .markdown': {
                py: 3,
              },
            }}
          >
            <Header />
            <Body />
            <Footer />
          </Grid>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
