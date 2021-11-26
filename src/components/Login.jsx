import { useContext } from "react"
import { UserContext } from "../context/UserProvider"


const Login = () => {

    const {user, setUser} = useContext(UserContext)

    console.log(user)

    if(user){
        return (
            <div>
                <h1>Activo</h1>
                <button onClick={() => setUser(false)}>Salir</button> 
            </div>
        )
    }

    return (
        <div>
           <h1>Offline</h1>
           <button onClick={() => setUser(true)}>Ingresar</button> 
        </div>
    )
}

export default Login
