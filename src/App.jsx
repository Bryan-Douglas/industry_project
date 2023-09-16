import './App.scss';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="content__wrapper">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
