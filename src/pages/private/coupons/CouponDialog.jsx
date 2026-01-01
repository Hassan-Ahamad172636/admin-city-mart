import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Dialog } from "@headlessui/react" // ✅ Correct import

function CouponDialog({ open, onClose, onSave, editData }) {
  const [form, setForm] = useState({
    code: "",
    discount: "",
    expiry: "",
  })

  useEffect(() => {
    if (editData) setForm(editData)
    else setForm({ code: "", discount: "", expiry: "" })
  }, [editData])

  const handleSubmit = () => {
    if (!form.code || !form.discount || !form.expiry) {
      toast.error("All fields are required")
      return
    }

    if (isNaN(form.discount) || form.discount <= 0) {
      toast.error("Discount must be a positive number")
      return
    }

    onSave({ ...form, discount: Number(form.discount) })
  }

  return (
    <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <Dialog.Panel className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
          {editData ? "Edit Coupon" : "Add Coupon"}
        </Dialog.Title>

        <div className="space-y-4">
          <div>
            <Label>Coupon Code</Label>
            <Input
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              placeholder="e.g. WELCOME10"
              className="bg-gray-50 border-gray-200 focus:bg-white transition"
            />
          </div>

          <div>
            <Label>Discount (%)</Label>
            <Input
              type="number"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              placeholder="e.g. 10"
              className="bg-gray-50 border-gray-200 focus:bg-white transition"
            />
          </div>

          <div>
            <Label>Expiry Date</Label>
            <Input
              type="date"
              value={form.expiry}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              className="bg-gray-50 border-gray-200 focus:bg-white transition"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onClose} className="px-4 py-2 rounded-lg">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="px-4 py-2 bg-[#032b62] text-white hover:bg-[#032869] rounded-lg">
            {editData ? "Update" : "Save"}
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default CouponDialog
