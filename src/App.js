import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import { Header } from './components';
import { Home, FullPost, AddPost, Login, Registration } from './pages'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Container maxWidth='lg'>  
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts/:id" element={<FullPost />} />
            <Route exact path="/add-post" element={<AddPost />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
          </Routes>
      </Container>
      </Router>
    </>
  );
}

export default App;
