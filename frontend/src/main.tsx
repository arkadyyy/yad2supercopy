import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography : {
    fontFamily : 'Rubik',
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
        </StyledEngineProvider>
  </StrictMode>,
)
