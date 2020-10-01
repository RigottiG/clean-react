import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => (
  <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}>Erro</span>
  </div>
)

export default FormStatus
