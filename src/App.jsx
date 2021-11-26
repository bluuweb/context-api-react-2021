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
