
import './App.css';
import { Routes,Route } from 'react-router';
import StylesGlobal from './components/StylesGlobal/StylesGolobal';
import Home from './components/Pages/Home'
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
function App() {
  return (
    <StylesGlobal>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/register" element = {<Register/>}/>
        <Route path ="/login" element = {<Login/>}/>
      </Routes>
    </StylesGlobal>
  );
}

export default App;
