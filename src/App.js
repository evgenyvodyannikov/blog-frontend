import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, Home } from './components'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
