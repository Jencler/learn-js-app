import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="container-main">
        <h1 className="h1-login">Aprende JavaScript</h1>
        <p className="detail-login">Curso de aprender paso a paso JavaScript. <br />
          100% gratis y practico.Desde cero.
        </p>
        <form className="form">
          <div className="container-providers">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <g clipPath="url(#clip0_1_473)">
                  <path d="M23.8741 12.2245C23.8741 11.2413 23.7943 10.5238 23.6216 9.77966H12.3937V14.2176H18.9842C18.8514 15.3205 18.1339 16.9815 16.5394 18.0976L16.517 18.2462L20.0671 20.9964L20.313 21.0209C22.5719 18.9347 23.8741 15.8653 23.8741 12.2245Z" fill="#4285F4" />
                  <path d="M12.3937 23.9176C15.6225 23.9176 18.3331 22.8545 20.313 21.0209L16.5393 18.0976C15.5295 18.8018 14.1741 19.2934 12.3937 19.2934C9.23124 19.2934 6.54718 17.2074 5.59039 14.324L5.45014 14.3359L1.75872 17.1927L1.71045 17.3269C3.67698 21.2334 7.7164 23.9176 12.3937 23.9176Z" fill="#34A853" />
                  <path d="M5.59033 14.324C5.33787 13.5799 5.19176 12.7826 5.19176 11.9588C5.19176 11.1349 5.33787 10.3377 5.57704 9.5936L5.57036 9.43513L1.83268 6.53241L1.71039 6.59058C0.899883 8.21168 0.434814 10.0321 0.434814 11.9588C0.434814 13.8855 0.899883 15.7058 1.71039 17.3269L5.59033 14.324Z" fill="#FBBC05" />
                  <path d="M12.3937 4.62403C14.6392 4.62403 16.154 5.59402 17.0177 6.40461L20.3927 3.10928C18.3199 1.1826 15.6225 0 12.3937 0C7.7164 0 3.67698 2.68406 1.71045 6.59056L5.57711 9.59359C6.54718 6.7102 9.23124 4.62403 12.3937 4.62403Z" fill="#EB4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1_473">
                    <rect width="24" height="24" fill="white" transform="translate(0.160034)" />
                  </clipPath>
                </defs>
              </svg>
              <p>Ingresar con Google</p>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <g clipPath="url(#clip0_1_480)">
                  <path d="M12.88 0C6.25 0 0.880005 5.37 0.880005 12C0.880005 17.31 4.315 21.795 9.085 23.385C9.685 23.49 9.91 23.13 9.91 22.815C9.91 22.53 9.89501 21.585 9.89501 20.58C6.88001 21.135 6.1 19.845 5.86 19.17C5.725 18.825 5.14001 17.76 4.63 17.475C4.21 17.25 3.61 16.695 4.61501 16.68C5.56 16.665 6.235 17.55 6.46 17.91C7.54 19.725 9.26501 19.215 9.95501 18.9C10.06 18.12 10.375 17.595 10.72 17.295C8.05 16.995 5.26 15.96 5.26 11.37C5.26 10.065 5.72501 8.985 6.49001 8.145C6.37001 7.845 5.95 6.615 6.61 4.965C6.61 4.965 7.61501 4.65 9.91 6.195C10.87 5.925 11.89 5.79 12.91 5.79C13.93 5.79 14.95 5.925 15.91 6.195C18.205 4.635 19.21 4.965 19.21 4.965C19.87 6.615 19.45 7.845 19.33 8.145C20.095 8.985 20.56 10.05 20.56 11.37C20.56 15.975 17.755 16.995 15.085 17.295C15.52 17.67 15.895 18.39 15.895 19.515C15.895 21.12 15.88 22.41 15.88 22.815C15.88 23.13 16.105 23.505 16.705 23.385C19.0873 22.581 21.1575 21.05 22.624 19.0076C24.0906 16.9653 24.8796 14.5144 24.88 12C24.88 5.37 19.51 0 12.88 0Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1_480">
                    <rect width="24" height="24" fill="white" transform="translate(0.880005)" />
                  </clipPath>
                </defs>
              </svg>
              <p>Ingresar con Git Hub</p>
            </button>
          </div>
          <input placeholder="Correo" className="input-control" type="text" />
          <input placeholder="Contraseña" className="input-control" type="password" />
          <button className="btn-login">Iniciar sessión</button>
          <Link className="link-create-account" to='/auth/register'>¿Crear una cuenta?</Link>
        </form>
        <figure className="card-message">
          <span>Para desbloquear el contenido,debes iniciar sesion antes</span>
        </figure>
      </div>

    </AuthLayout>
  )
}
