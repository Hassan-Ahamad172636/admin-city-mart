import React, { useState } from "react"
import ProductDialog from "./ProductDialog"
import { Plus, Pencil, Trash } from "lucide-react"

function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Mobile", price: 500, stock: 25 },
  ])

  const [dialogOpen, setDialogOpen] = useState(false)
  const [editProduct, setEditProduct] = useState(null)

  // Save (Add or Edit)
  const handleSave = (data) => {
    if (editProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editProduct.id ? { ...data, id: p.id } : p
        )
      )
    } else {
      setProducts((prev) => [
        ...prev,
        { ...data, id: Date.now() },
      ])
    }
    setEditProduct(null)
    setDialogOpen(false)
  }

  // Delete
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Products</h1>
        <button
          onClick={() => setDialogOpen(true)}
          className="flex items-center gap-2 bg-[#032b62] text-white px-4 py-2 rounded-lg hover:bg-[#032869] transition"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Price</span>
              <span>${item.price}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Stock</span>
              <span>{item.stock}</span>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setEditProduct(item)
                  setDialogOpen(true)
                }}
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-800 transition"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog */}
      <ProductDialog
        open={dialogOpen}
        editData={editProduct}
        onSave={handleSave}
        onClose={() => {
          setDialogOpen(false)
          setEditProduct(null)
        }}
      />
    </div>
  )
}

export default Product
