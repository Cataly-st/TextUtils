import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextArea from './components/TextArea';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#272c30';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path='/' element={<TextArea showAlert={showAlert}heading = "Enter your Text Here!!" mode={mode}/>}>
          
        </Route>
        <Route exact path='about' element={<About mode={mode}/>}>
          
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
