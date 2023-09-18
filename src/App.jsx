import './App.scss';
import Home from './components/Home/HomeSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/WelcomeSection';
import Skin from './components/Skin/SkinSection';
import SkinNeeds from './components/SkinNeeds/SkinNeeds';
import Scent from './components/Scent/Scent';
import Price from './components/Price/Price';
import Results from './components/Results/Results';

function App() {


  return (
    <div className="content__wrapper">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/welcome" element={<Welcome  />} />
      <Route path="/skin" element={<Skin   />} />
      <Route path="/skin-needs" element={<SkinNeeds   />} />
      <Route path="/scent" element={<Scent   />} />
      <Route path="/price" element={<Price  />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
