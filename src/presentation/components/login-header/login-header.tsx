import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import Logo from '../logo/logo'

const LoginHeader: React.FC = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
)

export default memo(LoginHeader)
