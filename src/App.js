
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
