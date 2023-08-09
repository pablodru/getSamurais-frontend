import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SamuraisPage from "./pages/SamuraisPage"
import GetSamuraiPage from "./pages/GetSamuraiPage"
import NewSamuraiPage from "./pages/NewSamuraiPage"
import MyServicesPage from "./pages/MyServicesPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/samurais' element={<SamuraisPage />} />
        <Route path='/samurais/:id' element={<GetSamuraiPage />} />
        <Route path='/samurais/novo' element={<NewSamuraiPage />} />
        <Route path='/meus-servicos' element={<MyServicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
