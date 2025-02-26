import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store} from './store/store.ts'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography : {
    fontFamily : 'Rubik',
  },
  direction : 'rtl',
  colorSchemes : {
    light : {
      
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <StyledEngineProvider injectFirst>
         {/* <Provider store={store}>  */}
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
         {/* </Provider> */}
         
     </StyledEngineProvider>
     
        
  </StrictMode>,
)
