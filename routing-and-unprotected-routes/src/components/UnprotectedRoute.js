
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({element}) => {
    const isAuthenticated = true;
    return isAuthenticated ?  element : <Navigate to = "/login"/> 
}

export default ProtectedRoute