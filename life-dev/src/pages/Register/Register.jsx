import  { useState, useEffect } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = userAuthentication()
  
  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const user = {
      displayName,
      email,
      senha
    }

    if(senha != confirmaSenha ){
      setError("As senhas precisam ser iguais!")
    }

    const res = await createUser(user)
    console.log(res)
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div>
      <h1>Cadastro de Life Developers</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <span> Nome:</span>
          <input 
          type="text" 
          name='displayName' 
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder='Digite seu nome de usuário' 
          required
          />
        </label>
        <label>
          <span> E-mail:</span>
          <input 
          type="email" 
          name='emailUsuario' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Entre com seu e-mail' 
          required
          />
        </label>
        <label>
          <span> Senha:</span>
          <input 
          type="password" 
          name='senhaUsuario' 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder='Entre com uma senha segura' 
          required
          />
        </label>
        <label>
          <span> Confrimação:</span>
          <input 
          type="password" 
          name='confirmaSenha' 
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          placeholder='Confirme sua senha' 
          required
          />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register