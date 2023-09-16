import './App.scss';
import Home from '../src/components/Home/Home'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
