import { useState } from "react"
import { Link } from "react-router-dom"
export default function Login(){

    const [user, setUser]=useState('');
    const [password,setPassword]=useState('')
    function handleSubmit(event:any){
        event.preventDefault()
        const data={
            user:user,
            password:password
        }
        // console.log(user,password)
        fetch("http://localhost:4000/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "X-Custom-Header"
            },
            mode:'cors',
            body:JSON.stringify(data)
        }).then((res:any)=>{
            return res.json()
        }).then((data)=>{
            console.log(JSON.stringify(data))
        })
    }
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="user">user name</label>
                <input type="text" name="user" id="user" onChange={(e)=>{setUser(e.currentTarget.value)}} />
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
                <button type="submit" value='login'>login</button>

                <p>dont have a account</p>
                <Link to="/signup">create a account</Link>
            </form>
        </>
    )
}