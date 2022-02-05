import React from 'react'
import Style from './login-style.scss'

const Login: React.FC = () => {
  return (
    <div className={Style.login}>
      <header className={Style.header}>
        <h1>Portifolio</h1>
      </header>
      <form className={Style.form}>
        <div className={Style.input}>
          <input type="text" />
        </div>
        <button type='submit'>Entrar</button>
        <a className={Style.link} href="">Cadastre-se</a>
      </form>
      <footer></footer>
    </div>
  )
}

export default Login