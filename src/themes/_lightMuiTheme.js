import { createTheme, alpha } from '@material-ui/core/styles'
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
      md: 1216,
      lg: 1440,
      xl: 1920,
    },
  },
})

theme = createTheme(theme, {
  props: {
    // 组件的名字 ⚛️
    MuiButtonBase: {
      // 需要应用的属性
      disableRipple: true, // 在整个应用中都不会有涟漪效果 💣！
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 6,
        height: theme.spacing(7),
        padding: theme.spacing(2, 6),
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.fontWeightBold,
      },
      text: {
        padding: theme.spacing(2, 6),
        textDecoration: 'underline',
        '&:hover': {
          color: theme.palette.secondary.main,
          textDecoration: 'underline',
        },
        '&:active': {
          color: theme.palette.secondary.dark,
          textDecoration: 'underline',
        },
        '&:disabled': {
          color: theme.palette.grey[600],
        },
      },
      outlined: {
        padding: theme.spacing(2, 6),
      },
      sizeSmall: {
        height: theme.spacing(5.5),
        fontSize: theme.typography.caption.fontSize,
        padding: theme.spacing(1.5, 5),
      },
      outlinedSizeSmall: {
        padding: theme.spacing(1.5, 5),
      },
      containedSizeSmall: {
        padding: theme.spacing(1.5, 5),
      },
      containedSecondary: {
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.standard,
          }),
          backgroundColor: theme.palette.secondary.main,
          boxShadow: `0 11px 15px -4px ${alpha(
            theme.palette.secondary.main,
            0.3
          )}`,
        },
        '&:active': {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: `0 11px 15px -4px ${alpha(
            theme.palette.secondary.dark,
            0.3
          )}`,
        },
        '&:disabled': {
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[400],
        },
      },
      outlinedPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.standard,
          }),
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        },
        '&:active': {
          color: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark,
        },
        '&:disabled': {
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[200],
          borderColor: theme.palette.grey[400],
        },
      },

      textPrimary: {
        padding: theme.spacing(2, 6),
      },
      sizeLarge: {},
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
