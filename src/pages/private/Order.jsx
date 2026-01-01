import React, { useState } from "react"
import { Eye, Truck, XCircle } from "lucide-react"

function Order() {
  const [orders] = useState([
    {
      id: "#1023",
      customer: "Ali Khan",
      total: 120,
      status: "Completed",
    },
    {
      id: "#1024",
      customer: "Ahmed Raza",
      total: 75,
      status: "Pending",
    },
    {
      id: "#1025",
      customer: "Sara Malik",
      total: 60,
      status: "Cancelled",
    },
  ])

  const statusColor = {
    Completed: "text-green-600 bg-green-50",
    Pending: "text-yellow-600 bg-yellow-50",
    Cancelled: "text-red-600 bg-red-50",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Orders</h1>
      </div>

      {/* Orders Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">{order.id}</span>
              <span
                className={`text-xs px-3 py-1 rounded-full ${statusColor[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Customer: <span className="font-medium">{order.customer}</span>
            </p>

            <p className="text-lg font-bold mt-2">${order.total}</p>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-4">
              <button className="text-blue-600 hover:scale-110 transition">
                <Eye size={18} />
              </button>

              <button className="text-green-600 hover:scale-110 transition">
                <Truck size={18} />
              </button>

              <button className="text-red-600 hover:scale-110 transition">
                <XCircle size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
