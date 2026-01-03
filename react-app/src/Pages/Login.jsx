import { useCallback, useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

function Login (){

    const {login} =useAuth();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const handleLogin =()=>{
        if(login(email,password)){
           alert('login successfull');
           return true;
        }
        else{
            alert('Invalid password or email')
        }
    }

    return(
        <div>
            <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}
export default Login;