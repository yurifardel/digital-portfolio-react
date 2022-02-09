import React from 'react'
import { Input } from '@/presentation/components'
import Style from './login-style.scss'

const Login: React.FC = () => {
  return (
    <div className={Style.login}>
      <header className={Style.header}>
        <h1>Sign-in</h1>
      </header>
      <form className={Style.form}>
        <Input />
        <button type='submit'>Entrar</button>
        <a className={Style.link} href="">Cadastre-se</a>
      </form>
      <footer></footer>
    </div>
  )
}

export default Login