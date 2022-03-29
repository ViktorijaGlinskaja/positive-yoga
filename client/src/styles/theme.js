import { createTheme } from '@mui/material';
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
            white: '#FFFFFF',
            yellow: '#FFE082',
            black: '#39353C',
            grey: grey[800],
            blue: '#90CAF9',
            darkGrey: grey[900],
            greyTransparent: 'rgbs(34, 34, 44, 0.64)',
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
});

export default responsiveFontSizes(theme);