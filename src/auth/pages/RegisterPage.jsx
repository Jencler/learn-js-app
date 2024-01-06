import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import Img from '../../assets/Logo.svg'

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <div className="container-form-register">
        <form className="form">
          <img className="image-register" src={Img} alt="" />
          <input placeholder="Correo" className="input-control-2" type="text" />
          <input placeholder="Contraseña" className="input-control-2" type="password" />
          <button className="btn-login">Registrate</button>
          <Link className="link-create-account" to='/auth/login'>Iniciar sesion</Link>
        </form>
      </div>
    </AuthLayout>
  )
}
