// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Homepage from './Components/Homepage';
import './Components/Youtube.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path= '/' element ={<Homepage/>}/>

      </Routes>
    </div>
  );
}

export default App;
