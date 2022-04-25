import { createTheme, ThemeOptions } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'sans-serif',
        ].join(','),
        allVariants: {
            color: '#22222C',
        },
    },
    palette: {
        primary: {
            main: '#22222C',
        },
        secondary: {
            main: '#2B6D96',
            light: '#FFFFFF',
            contrastText: '#FFE082',
            dark: '#39353C',
        },
        blue: {
            main: '#90CAF9',
        },
        grey: {
            main: grey[800],
            secondary: grey[900]
        },
        info: {
            main: '#FF9B4E',
            secondary: '#FFE082',
        },
    },
    mixins: {
        toolbar: {
            height: '56px',
        }
    }
} as ThemeOptions);

export default responsiveFontSizes(theme);