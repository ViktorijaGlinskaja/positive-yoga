import '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    blue: PaletteColor;
    transparentDark: PaletteColor;
    transparentBlue: PaletteColor;
  }
  interface PaletteOptions {
    blue?: PaletteColorOptions;
    transparentDark?: PaletteColorOptions;
    transparentBlue?: PaletteColorOptions;
  }
}
