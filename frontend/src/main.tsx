import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store} from './store/store.ts'
import { Provider } from 'react-redux'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
     <StyledEngineProvider injectFirst>
         {/* <Provider store={store}>  */}
            <App />
         {/* </Provider> */}
         
     </StyledEngineProvider>
     </ThemeProvider>
     
        
  </StrictMode>,
)
