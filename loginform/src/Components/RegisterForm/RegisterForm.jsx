import React, { useState } from 'react'


const Register = () => { 
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confPassword, confirmPassword] = useState("")


const handleSubmit = (event) => {
  event.preventDefault();
}

const handleValidation = (e) => {
const senha1 = password 
const senha2 = confPassword 

 if (senha1 != senha2) { 
    console.log(senha1, senha2);
} else { 
    senha1 == senha2  
      console.log(senha1, senha2);
} 
} 

console.log("registro:", "LOGIN:", username, "EMAIL:", email, "SENHA:", password, "SENHA IGUAL:", confPassword)
console.log("Registrado");


return (

    
          <div className="container">
        <form onSubmit={ handleSubmit, handleValidation}>
            <h1> <a>REGISTER</a></h1>
            <div className="input-field"> 
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />  
             </div>
             
             <div className="input-field" >
            <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
            />  
          </div>
               <div className="input-field" >
            <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    minLength={8}
                    maxLength={15}
                    onChange={(e) => setPassword(e.target.value)}
            />  
             </div>

             <div className="input-field" >
            <input 
                    type="password"
                    placeholder="Confirmar a senha"
                    value={confPassword}
                    minLength={8}
                    maxLength={15}
                    onChange={(e) => confirmPassword(e.target.value)}
            />  
             </div>
                             <button type="submit" onSubmit={handleSubmit}>
                           Entrar
                </button>


         </form>
      </div>
)
}

export default Register
