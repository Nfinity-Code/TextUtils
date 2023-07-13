import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from '../components/About';
import Navbar from "../components/Navbar";
import TextForm from '../components/TextForm';
import Alert from '../components/Alert';
import './App.css'

function App() {
  const [Mode, setMode] = useState('dark')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
msg:message,
type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  
  }
  const toggle=()=>{
    if(Mode=='dark'){
      setMode('light')
      document.body.style.transition = 'background-color 1s ease-in-out';
      document.body.style.backgroundColor="black";
      showAlert("Enabled Dark mode","success")
    }else if(Mode=='light'){
      setMode('success')
      document.body.style.transition = 'background-color 1s ease-in-out';
      document.body.style.backgroundColor="green";
      showAlert("Enabled green mode","success")
    }else if(Mode=='success'){
      setMode('warning')
      document.body.style.transition = 'background-color 1s ease-in-out';
      document.body.style.backgroundColor="yellow";
      showAlert("Enabled yellow mode","success")
    }else{
      setMode('dark')
      document.body.style.transition = 'background-color 1s ease-in-out';
      document.body.style.backgroundColor="white";
      showAlert("Enabled white mode","success")
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={Mode} toggle={toggle}/>
    <Alert alert={alert}/>
   <Routes>
   <Route exact path="/" element={<TextForm mode={Mode} showAlert={showAlert}/>}></Route>
   <Route exact path="/about" element={<About />}></Route>
  </Routes>
</BrowserRouter>
   </>   
  )
}


export default App
