import React, { useEffect, useState } from "react"

function ProductDialog({ open, onClose, onSave, editData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  })

  useEffect(() => {
    if (editData) setForm(editData)
    else setForm({ name: "", price: "", stock: "" })
  }, [editData])

  if (!open) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSave(form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">
          {editData ? "Edit Product" : "Add Product"}
        </h2>

        <div className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-2 rounded"
          />
          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#032b62] text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDialog
