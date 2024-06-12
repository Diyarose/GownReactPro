import logo from './logo.svg';
import './App.css';
import AddGown from './components/AddGown';
import SearchGown from './components/SearchGown';
import ViewGown from './components/ViewGown';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddGown/>}/>
    <Route path='/search' element={<SearchGown/>}/>
    <Route path='/view' element={<ViewGown/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
