import  { useState } from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [emailUsuario, setEmailUsuario] = useState('')
  const [senhaUsuario, setSenhaUsuario] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [erro, setErro] = useState('')

  return (
    <div>
      <h1>Cadastro de Life Developers</h1>
      <form>
        <label>
          <span> Nome:</span>
          <input type="text" name='displayName' placeholder='Digite seu nome de usuário' required/>
        </label>
        <label>
          <span> E-mail:</span>
          <input type="email" name='emailUsuario' placeholder='Entre com seu e-mail' required/>
        </label>
        <label>
          <span> Senha:</span>
          <input type="password" name='senhaUsuario' placeholder='Entre com uma senha segura' required/>
        </label>
        <label>
          <span> Confrimação:</span>
          <input type="password" name='confirmaSenha' placeholder='Confirme sua senha' required/>
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register