
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './Components/AuthContext'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Customer from './Pages/Customer'
import ProtectedRoute from './Components/ProtectedRoute'
import Navbar from './Pages/Navbar'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Navbar/>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin/dashboard' element={<ProtectedRoute><Admin/></ProtectedRoute> } />
          <Route path='/customer/dashboard' element={<ProtectedRoute><Customer/></ProtectedRoute>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
        
    </>
  )
}

export default App
