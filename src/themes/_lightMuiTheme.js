import { createTheme } from '@material-ui/core/styles'
// Use createMuiTheme here is good for theme object key suggestion
let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1A285D',
      light: '#7BB8C8',
    },
    secondary: {
      dark: '#DC3A16',
      main: '#F2512D',
    },
    error: {
      main: '#FF2848',
    },
    success: {
      main: '#7FE34A',
    },
    divider: '#DEDEDE',
    grey: {
      50: '#FFFFFF',
      100: '#FAFAFA',
      200: '#F5F5F5',
      300: '#F0F0F0',
      400: '#DEDEDE',
      500: '#C2C2C2',
      600: '#979797',
      700: '#818181',
      800: '#606060',
      900: '#3C3C3C',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 966,
      lg: 1216,
      xl: 1440,
    },
  },
})

theme = createTheme(theme, {
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.9,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '3.81rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.77rem',
      },
    },
    h2: {
      fontSize: '3.05rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.58rem',
      },
    },
    h3: {
      fontSize: '2.44rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.40rem',
      },
    },
    h4: {
      fontSize: '1.95rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.56rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.11rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.98.rem',
      },
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: theme.typography.fontWeightBold,
    },
    caption: {
      fontSize: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.78rem',
      },
    },
    overline: {
      fontSize: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.78rem',
      },
    },
  },
})

export default theme
