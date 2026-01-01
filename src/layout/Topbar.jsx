import React from "react"
import { Bell, Menu } from "lucide-react"

function Topbar({ setSidebarOpen }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-b-gray-300">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-xl font-semibold text-gray-700">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="Admin"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  )
}

export default Topbar
