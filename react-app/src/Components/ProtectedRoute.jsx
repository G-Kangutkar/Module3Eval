import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({children}){
    const {isLogin}=useAuth();
    if(!isLogin){
        <Navigate to={'/'} replace/>
    }
    return children;
}
export default ProtectedRoute;