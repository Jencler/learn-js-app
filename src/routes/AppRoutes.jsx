import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { LearnJsRoutes } from "../learnjs/routes/LearnJsRoutes"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<LearnJsRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}
