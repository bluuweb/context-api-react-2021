import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const InfoUser = () => {

    const {user} = useContext(UserContext)

    return (
        <>
            <h2>
                {
                    user ? 'activo' : 'offline'
                }
            </h2>
        </>
    )
}

export default InfoUser
