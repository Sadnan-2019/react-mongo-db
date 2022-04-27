import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/user/add' element={<AddUser/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
