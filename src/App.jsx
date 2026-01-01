import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/public/Login'
import AdminLayout from './layout/AdminLayout'
import Dashboard from './pages/private/Dashboard'
import Product from './pages/private/products/Product'
import Order from './pages/private/Order'
import User from './pages/private/User'
import Driver from './pages/private/Driver'
import Coupon from './pages/private/coupons/Coupon'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Order />} />
          <Route path="users" element={<User />} />
          <Route path="drivers" element={<Driver />} />
          <Route path="coupons" element={<Coupon />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
