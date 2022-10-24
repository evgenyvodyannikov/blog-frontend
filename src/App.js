import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
