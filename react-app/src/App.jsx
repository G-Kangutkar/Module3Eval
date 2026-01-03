
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './Components/AuthContext'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Customer from './Pages/Customer'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin/dashboard' element={<Admin/>} />
          <Route path='/customer/dashboard' element={<Customer/>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
        
    </>
  )
}

export default App
