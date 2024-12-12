import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/404/notfound.page"
import EmployeePage from "./pages/dashboard/employee.page"
import MainLayout from "./layouts/MainLayout"
import CreateEmployee from "./pages/dashboard/create.page"
import UpdateEmployee from "./pages/dashboard/update.page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<EmployeePage />} />
        <Route path="add-employee" element={<CreateEmployee />} />
        <Route path="update-employee/:id" element={<UpdateEmployee />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
