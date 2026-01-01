import React from "react"
import { NavLink } from "react-router-dom"
import { Home, Box, ShoppingCart, Users, LogOut, X } from "lucide-react"

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/admin", end: true },
    { name: "Products", icon: Box, path: "/admin/products" },
    { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Drivers", icon: Users, path: "/admin/drivers" },
    { name: "Coupons", icon: Users, path: "/admin/coupons" },
  ]


  return (
    <aside
      className={`
        fixed lg:static z-40
        h-full bg-white shadow-sm
        w-64
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4.5 border-b border-b-gray-300">
        <span className="text-xl font-bold text-[#032b62]">Admin Panel</span>

        {/* Close button (mobile only) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>

        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-t-gray-300">
        <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded w-full">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
