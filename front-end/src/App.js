
import './App.css';
import Login from './pages/Login';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import CourtRegister from './pages/CourtRegister';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/courtRegistration" element={<CourtRegister/>}/>
      </Routes>
      </BrowserRouter>
   


    </div>
  );
}

export default App;
