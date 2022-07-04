import './App.css';
import {Route, Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';


// /add /edit/:id 

const App = () => {
  return (
    <div className='App'>
       <ToastContainer />
       <Navbar/>
       <Routes>
        <Route  path='/' element={ <Home/>}/>
        <Route  path='/add' element={<Add/>}/>
        <Route  path='/edit/:id' element={<Edit/>}/>
       </Routes>
    </div>
  );
}

export default App;
