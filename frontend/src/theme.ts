import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography : {
    fontFamily : 'Rubik',
  },
});

theme = createTheme(theme,{
  components : {
    MuiOutlinedInput : {
      styleOverrides : {
        root : {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "none",
            },
            "&.Mui-focused fieldset": {
                border: "none",
            },
            "&:hover fieldset": {
                border: "none",
            },
            },
        }
      }
    },
    MuiStack : {
      styleOverrides  : {
        root : {
          "::-webkit-scrollbar" : {
            display : "none"
        },
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
          root: {
              maxWidth: '1440px'
          },
          maxWidthMd: {
              maxWidth: 320,
          },
          maxWidthLg: {
              maxWidth: `1240px!important`,
          },
      },
  },
    MuiPaper : {
      styleOverrides : {
        root : {
          transition : 'none !important'
        }
      }
    },
    MuiFab : {
      styleOverrides : {
        root : {
          backgroundColor : '#ffffff',
          boxShadow : '1px 1px 4px #00000025',
          ":hover" : {backgroundColor : '#ffffff'}
        }
      }
    },
    MuiTab : {
        styleOverrides : {
            root : {
                color : '#7777777',
                "&.Mui-selected": {
                    color : '#F26632',
                  }
            },
        }
    },
    MuiTabs : {
       
    },
    MuiSelect : {
      styleOverrides : {
        root : {
            "& .MuiTypography-root" : {
              right: "unset",
              left: "14px",
              position : 'relative',
            },
            
            "& .MuiSvgIcon-root": {
              right: "unset",
              left: "10px",
            },
            // cancels border
            "& .MuiOutlinedInput-notchedOutline": {
              border: 'none'
            },
            // cancels border when select is focused
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none"
            }
        }

      }
    },
  },
  direction : 'rtl',
  colorSchemes : {
    // --- DONT FOREGET TO SET COLOR PALLETTE ---
    // orange : '#F26632',
    orange : 'purple',
    light : {
      
    },
  }
})


export default theme