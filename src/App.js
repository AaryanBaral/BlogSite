import './App.css';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NormalBlog from './pages/NormalBlog';
import Contributor from './component/Contributor';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element=  {<HomePage/>} />
        <Route exact path='/details/:id' element=  {<NormalBlog />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
