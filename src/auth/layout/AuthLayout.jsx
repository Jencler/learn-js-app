


import LogoImg from '../../assets/Logo.svg'

export const AuthLayout = ({ children }) => {
  return (
    <div className="app">
      <main className="main">

        <div className="sidebar">
          <header className='sidebar-header' >
            <img src={LogoImg} alt="Logo app JS" draggable="false" />
          </header>
          <div className='container-blog-items'>
            <figure className='container-blog-item'>
              <span className="material-symbols-rounded">
                notifications
              </span>
              <p> Notificaciones</p>
            </figure>

            <figure className='container-blog-item'>
              <span className="material-symbols-rounded">
                bug_report
              </span>
              <p> Avisar de errores</p>
            </figure>

          </div>

          <button className='sidebar-main'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
              <g clipPath="url(#clip0_12_110)">
                <path d="M18.979 13.55L30.6355 0H27.873L17.752 11.765L9.66799 0H0.343994L12.5685 17.791L0.343994 32H3.10649L13.795 19.5758L22.332 32H31.656L18.9782 13.55H18.979ZM15.1955 17.9475L13.9567 16.176L4.10174 2.0795H8.34474L16.2975 13.456L17.536 15.2275L27.8742 30.015H23.6317L15.1955 17.9482V17.9475Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_12_110">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Compartir</p>
          </button>
        </div>

        {children}
      </main>
    </div>
  )
}
