
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main';
import Automobile from './component/automobile/Automobile';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className='app-container'>
       <Sidebar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:name" element={<Automobile />} />
      </Routes>
   
    </div>
  );
}

export default App;
