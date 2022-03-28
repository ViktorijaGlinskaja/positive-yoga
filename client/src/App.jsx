import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        Labas
      </div>
    </ThemeProvider>
  );
}

export default App;
