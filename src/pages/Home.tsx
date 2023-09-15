import { useEffect } from "react"

interface HomePros{
    sessionID:string
}

export default function Home({sessionID}:HomePros){
    useEffect( ()=>{
        const fetchSession={
            sessionID:sessionID
        }
        const session= async ()=>{
            const data = await fetch('http://localhost:4000/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Request-Method": "GET",
                    "Access-Control-Request-Headers": "X-Custom-Header"
                },
                mode:'cors',
                body:JSON.stringify(fetchSession)
            })
            console.log(data.json())
            // set state with the result
            //setState(something)
        }
        session().catch(console.error)
    },[])
    return(
        <>
            <h1>home page</h1>
        </>
    )
}