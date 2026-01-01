import React, { useState } from "react"
import { Truck, UserCheck, UserX, Phone, Mail } from "lucide-react"

function Driver() {
  const [drivers] = useState([
    {
      id: 1,
      name: "Ali Driver",
      email: "ali.driver@gmail.com",
      phone: "0300-1234567",
      vehicle: "Honda Civic",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Delivery",
      email: "ahmed.driver@gmail.com",
      phone: "0312-9876543",
      vehicle: "Suzuki Alto",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sara Transport",
      email: "sara.driver@gmail.com",
      phone: "0333-4567890",
      vehicle: "Toyota Corolla",
      status: "Active",
    },
  ])

  const statusStyle = {
    Active: "text-green-600 bg-green-50",
    Inactive: "text-red-600 bg-red-50",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Drivers</h1>
      </div>

      {/* Driver Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-800">{driver.name}</h2>
              <span
                className={`text-xs px-3 py-1 rounded-full ${statusStyle[driver.status]}`}
              >
                {driver.status}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Mail size={14} /> {driver.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> {driver.phone}
              </p>
              <p className="flex items-center gap-2">
                <Truck size={14} /> {driver.vehicle}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-4">
              {driver.status === "Active" ? (
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

export default Driver
