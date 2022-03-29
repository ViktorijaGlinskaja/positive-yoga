import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import CheckoutPage from './pages/checkout-page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CheckoutPage/>
    </ThemeProvider>
  );
}

export default App;
