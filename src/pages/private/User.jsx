import React, { useState } from "react"
import { Mail, Phone, UserCheck, UserX } from "lucide-react"

function User() {
  const [users] = useState([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      phone: "0301-1234567",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      phone: "0312-9876543",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Sara Malik",
      email: "sara@gmail.com",
      phone: "0333-4567890",
      status: "Active",
    },
  ])

  const statusStyle = {
    Active: "text-green-600 bg-green-50",
    Blocked: "text-red-600 bg-red-50",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Users</h1>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-800">
                {user.name}
              </h2>
              <span
                className={`text-xs px-3 py-1 rounded-full ${statusStyle[user.status]}`}
              >
                {user.status}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Mail size={14} /> {user.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> {user.phone}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-4">
              {user.status === "Active" ? (
                <button className="text-red-600 hover:scale-110 transition">
                  <UserX size={18} />
                </button>
              ) : (
                <button className="text-green-600 hover:scale-110 transition">
                  <UserCheck size={18} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
