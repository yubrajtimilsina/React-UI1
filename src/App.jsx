import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Blog from './blog';
import Createblog from './createblog';
 

function App() {

 return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/blog' element={<Blog />}/>
    <Route path='/createblog' element={<Createblog />}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App;
