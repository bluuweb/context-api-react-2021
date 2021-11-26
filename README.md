# Context API

- [context](https://es.reactjs.org/docs/context.html)
- [hook useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)

## ¿Qué es Context?
- Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
- Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
- También si trabajas con diferentes vistas estas no estarán anidadas, por ende Context proporciona una solución.

## createContext
context/UserProvider.js
```jsx
import {createContext, useState} from 'react'

export const UserContext = createContext()

const UserProvider = (props) => {
    
    const [user, setUser] = useState(false)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
```

App.jsx
```jsx
import Login from "./components/Login"
import InfoUser from "./components/InfoUser"
import UserProvider from "./context/UserProvider"

const App = () => {
    return (
        <UserProvider>
            <div>
                <Login />  
                <InfoUser />
            </div>
        </UserProvider>
    )
}

export default App
```

## useContext
Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del ``<MyContext.Provider>`` ascendentemente más cercano en el árbol al componente que hace la llamada.

components/Login.jsx
```jsx
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
```

components/InfoUser.jsx
```jsx
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const InfoUser = () => {

    const {user} = useContext(UserContext)

    return (
        <div>
            <h2>
                {
                    user ? 'activo' : 'offline'
                }
            </h2>
        </div>
    )
}

export default InfoUser
```