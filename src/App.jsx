import Login from "./components/Login"
import InfoUser from "./components/InfoUser"
import UserProvider from "./context/UserProvider"

const App = () => {
    return (
        <UserProvider>
            <>
                <Login />  
                <InfoUser />
            </>
        </UserProvider>
    )
}

export default App
