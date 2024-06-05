import { FaUser, FaLock, FaEye, FaRegEyeSlash } from 'react-icons/fa';
import "./LoginForm.css";
import { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };



 return (
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h1> <a href="/">HELLO WORLD</a></h1>
            <div className="input-field"> 
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />  
                <FaUser className="iconform"/>
             </div>
             
             <div className="input-field" >
            <input 
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    
            />  
                 
                <FaLock className="iconform"/>
                <div className="iconpass" onClick={() => setVisible(!visible)}> 
                     {visible ? <FaEye/> : <FaRegEyeSlash/> }
                </div>
             </div>

      
            
            <div className="recall-forget"> 
            <label> 
                <div>
                <a href="/recover">Esqueceu a senha?</a>
                </div> 
                 </label></div> 
            
                 <button type="submit" onSubmit={handleSubmit}>
                    Entrar
                </button>

             <div className="signup-link">
                <p> Não tem uma conta? <a href="/register">Registrar</a></p>
           
             </div>
         </form>
      </div>
    
  )
}

export default Login
