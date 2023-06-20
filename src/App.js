import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import { useState } from "react";
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from "./pages/ProtectedRoute";



function App() {

  const [user, setUser] = useState(null)

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="contact" element={<Contact></Contact>}/>
        <Route path="products" element={<Products></Products>}/>
        <Route path="products/:productId" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="login" element={<Login setUser={setUser}></Login>}></Route>
        <Route path="dashboard" 
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user}></Dashboard>
          </ProtectedRoute>
        }
        
        ></Route>
        
        <Route path="*" element={<Error></Error>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
