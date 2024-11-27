import React, { useState } from 'react';
import './App.css';
import logo from './assets/facebook 1.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const cadastrarUsuario = (e) => {
    e.preventDefault(); 

    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novoUsuario = { email, password }; 
    setUsuarios([...usuarios, novoUsuario]); 
    setEmail(''); 
    setPassword(''); 
  }
  
  return (
<div className='container'>

<div className='colum2'>
    <img src={logo} className='img'  />
    <h1 className='text'>Connect with friends and the <br /> world around you on Facebook.</h1>
  </div>

  <div>

  <form className="App" onSubmit={cadastrarUsuario}>

    <input  type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

    <input  type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <button  className='botao1' onClick={cadastrarUsuario}>Login</button>
          
          <a className='link' href="http://">Forgot Password?</a>
          <hr />
          <button className='botao2'>Create new account</button>
         

  </form>
 
  </div>
  
  
</div>

  );
}

export default App;
