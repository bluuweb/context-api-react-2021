import Navbar from "./components/Navbar"
import UserProvider from "./context/UserProvider"
import { Outlet } from "react-router"

const App = () => {
    return (
        <UserProvider>
            <>
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </>
        </UserProvider>
    )
}

export default App
