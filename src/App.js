import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import { Header } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>

      </Container>
    </>
  );
}

export default App;
