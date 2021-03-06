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
