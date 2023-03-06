import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createTheme, ThemeProvider } from '@mui/material'
import { ContextProvider } from '@/context/context';

const theme = createTheme({
  typography: {
    fontFamily: ['Kumbh Sans', 'sans-serif'].join(',')
   }
})

function MyApp({ Component, pageProps }) {
  return <ContextProvider><ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider></ContextProvider>
}

export default MyApp
