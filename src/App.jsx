import './App.scss';
import Home from './components/Home/HomeSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/WelcomeSection';
import Skin from './components/Skin/SkinSection';
import { useNavigate } from 'react-router-dom';


function App() {


  return (
    <div className="content__wrapper">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/welcome" element={<Welcome  />} />
      <Route path="/skin" element={<Skin   />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
