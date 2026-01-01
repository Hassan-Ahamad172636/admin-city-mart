import React, { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

function ForgotPasswordDialog({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [passwords, setPasswords] = useState({
    password: "",
    confirm: "",
  })

  const otpRefs = useRef([])

  if (!open) return null

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) otpRefs.current[index + 1].focus()
  }

  const handleNext = () => {
    if (step === 1 && !email) return toast.error("Enter email")
    if (step === 2 && otp.join("").length !== 6)
      return toast.error("Enter complete OTP")
    if (
      step === 3 &&
      (!passwords.password ||
        passwords.password !== passwords.confirm)
    )
      return toast.error("Passwords do not match")

    if (step < 3) setStep(step + 1)
    else {
      toast.success("Password reset successful")
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          Forgot Password
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-3">
            <Label>Email</Label>
            <Input
              placeholder="admin@citymart.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <Label className="mb-2 block">Enter OTP</Label>
            <div className="flex gap-2 justify-between">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleOtpChange(e.target.value, i)
                  }
                  className="w-12 h-12 border rounded-lg text-center text-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-3">
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                onChange={(e) =>
                  setPasswords({
                    ...passwords,
                    confirm: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleNext}>
            {step === 3 ? "Reset Password" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordDialog
