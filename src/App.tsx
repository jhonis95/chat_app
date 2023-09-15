import { useState } from 'react'
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
  // const isSessionStarted= sessionStorage.getItem('loggedin') === 'true'
  // useEffect(()=>{
  //   isSessionStarted?setLogin(true):setLogin(false);
  // })
  const [login, setLogin] = useState(false)
  const [session,setSession]= useState('')
  return (
        <Routes>
          <Route path='/' element={<ProtedRouter login={login}><Home sessionID={session}/></ProtedRouter>}/>
          <Route path='/login' element={<Login setlogin={setLogin} setSession={setSession}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
  )
}
export default App
