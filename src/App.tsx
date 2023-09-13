import { useState, useEffect } from 'react'
import './App.css'
import {   Routes,  Route, Navigate} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
interface protectRouterPros{
  children:JSX.Element,
  login:boolean
}

function ProtedRouter({children,login}:protectRouterPros){
  if(login===false){
    return <Navigate to="/login"/>
  }
  return children
}

function App() {
  const isSessionStarted= sessionStorage.getItem('loggedin') === 'true'
  useEffect(()=>{
    isSessionStarted?setLogin(true):setLogin(false);
  })
  const [login, setLogin] = useState(true)
  return (
        <Routes>
          <Route path='/' element={<ProtedRouter login={login}><Home/></ProtedRouter>}/>
          <Route path='/login' element={<Login setlogin={setLogin}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
  )
}
export default App
