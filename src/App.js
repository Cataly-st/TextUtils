import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#272c30';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextArea heading = "Enter your Text Here!!" mode={mode}/>
    </>
  );
}

export default App;
