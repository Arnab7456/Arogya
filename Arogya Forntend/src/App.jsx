import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './landing/Home';
import Body from './landing/Body';
import Footer from './landing/Footer';
import Login from './auth/login';
import Signup from './auth/signup';

const LayOUt = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOUt />}>
          <Route index element={<Body />} /> 
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
