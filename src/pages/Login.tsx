import { Link } from "react-router-dom"
export default function Login(){
    return(
        <>
            <form action="">
                <label htmlFor="user">user name</label>
                <input type="text" name="user" id="user" />
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password" />
                <button type="submit">login</button>

                <p>dont have a account</p>
                <Link to="/signup">create a account</Link>
            </form>
        </>
    )
}