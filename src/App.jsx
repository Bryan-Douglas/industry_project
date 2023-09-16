import './App.scss';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';


function App() {
  return (
    <div className="content__wrapper">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
