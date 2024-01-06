import { Navigate, Route, Routes} from "react-router-dom"
import { LearnJSPage } from "../pages/LearnJSPage"
import { PerfilPage } from "../pages/PerfilPage"

export const LearnJsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LearnJSPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
