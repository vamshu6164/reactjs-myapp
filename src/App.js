import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleModeFun = () =>{
    const green = document.getElementById('gr');
    const red = document.getElementById('rd');
    if(mode === 'light'){
      if(green.checked === true || red.checked === true){
        green.checked = false;
        red.checked = false;
        setRadioActive('#0d6efd');
      }
      setMode('dark');
      document.body.style.backgroundColor = '#020321';
      showAlert("Dark mode is enabled", "success");
      document.title = 'Home - Dark Mode';
      setInterval(() => {
        document.title = 'Nice website it is';
      },2000)
      setInterval(() => {
        document.title = 'Awesome website';
      },1500)
    }else{
      if(green.checked === true || red.checked === true){
        green.checked = false;
        red.checked = false;
        setRadioActive('#0d6efd');
      }
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Home - Light Mode';
    }

  }
  const [radioActive, setRadioActive] = useState('#0d6efd');
  const handleOnChangeId = (event)=>{
    const colorId = event.target.id;
    if(colorId === 'gr'){
      document.body.style.backgroundColor = '#cff5cf';
      setRadioActive('green');
    }
    if(colorId === 'rd'){
      document.body.style.backgroundColor = '#ebc9c9';
      setRadioActive('red');
    }
  }
  return (
    <>
    <Router>
        <Navbar title = "Textutils" mode={mode} radioActiveFun = {handleOnChangeId} toggleMode ={toggleModeFun} home="HOme" about="AbOut Us"/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Text Manipulator" mode={mode} radioActive = {radioActive}/>} />
            <Route exact path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;

