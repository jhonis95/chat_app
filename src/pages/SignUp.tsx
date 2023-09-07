import { useState } from "react"

export default function SignUp(){

    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')

    function handleSubmit(event:any){
        event.preventDefault()
        fetch('http://localhost:4000/singup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "X-Custom-Header"
            },
            mode:'cors',
            body:JSON.stringify({
                userToResister:user,
                passwordToResister:password
            })
        }).then((res)=>{
            if(!res==res.ok){
                throw console.error('erro to connect with the back end');
            }

        })
    }
    return(
        <>
            <h1>Let's Create a Accout in the Chat App</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" onChange={(e)=>{setUser(e.target.value)}}/>
                <input type="text" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">create account</button>
            </form>
        </>
    )
}