import { Container } from '@mui/material'
import { Carousel, Header } from './components'


function App() {

  return (
    <div style = {{backgroundColor : '#ffffff',minHeight :'100vh'}}>
    <Header/>
    <Container maxWidth = 'lg'>
      <Carousel/>
     
    </Container>
    </div>
  )
}

export default App
