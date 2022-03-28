import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import HomePage from './pages/home-page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
