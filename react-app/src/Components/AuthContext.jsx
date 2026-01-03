import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth =()=>useContext(AuthContext);
const AuthProvider =({children})=>{

    const [isLogin,setIslogin]=useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const saved = localStorage.getItem('isLoggedIn')
        if(saved === 'true'){
            setIslogin(true)
        }
    });

    const login = useCallback((email,password)=>{
        if((email === 'admin@gmail.com' && password === 'admin1234') ){
            setIslogin(true);
            localStorage.setItem('isLoggedIn','true');
            navigate('/admin/dashboard')
            return true;
        }
        if((email ==='customer@gmail.com' && password === 'customer1234')){
            setIslogin(true);
            localStorage.setItem('isLoggedIn','true');
            navigate('/customer/dashboard')
            return true;
        }
        return false;
        
    },[]);

    return(
        <AuthContext.Provider value={{isLogin,login}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;