
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const isAuthenticated = false;
    return isAuthenticated ?  element : <Navigate to = "/login"/> 
}

export default ProtectedRoute