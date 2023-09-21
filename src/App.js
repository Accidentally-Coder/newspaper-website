import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import User_Home from './pages/User_Home';
import Layout from './components/Layout';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<User_Home />} />

      </Routes>
    </>
  );
}

export default App;
