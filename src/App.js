import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextArea from './components/TextArea';
import React,{useState} from 'react';

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
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextArea showAlert={showAlert}heading = "Enter your Text Here!!" mode={mode}/>
    </>
  );
}

export default App;
