import React, { useState } from 'react'
import icon from "../../assets/icon.png"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import googleIcon from "../../assets/googleIcon.png"
import { useNavigate } from 'react-router-dom'
import ForgotPasswordDialog from './ForgotPasswordDialog'

function Login() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [forgotOpen, setForgotOpen] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  function handleSubmit() {
    console.log(form)
    if (!form.email || !form.password) {
      return toast.error('Email and password are required')
    } else {
      toast.success('Login successfully')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-300 px-4'>
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-400/70 p-5 md:p-6">
        <div className="flex items-center mb-6">
          <img src={icon} className='h-12 md:h-14' alt="icon" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#032b62] ml-2">City Mart</h1>
        </div>

        <div className="text-xl md:text-3xl font-semibold text-[#032b62] mb-6">
          Welcome back
        </div>

        <div className="space-y-4">
          {/* Email */}
          <div className='space-y-2'>
            <Label className={'text-[#032b62]'}>Email *</Label>
            <Input
              type="email"
              placeholder='Enter your email address'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label className={'text-[#032b62]'}>Password *</Label>
            <div className="relative">
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                className="pr-10"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me + Forgot */}
          <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id="remember"
                checked={form.rememberMe}
                onCheckedChange={(checked) => setForm({ ...form, rememberMe: checked })}
                className="cursor-pointer"
              />
              <Label htmlFor="remember" className="text-[#032b62] cursor-pointer">
                Remember Me
              </Label>
            </div>
            <Button onClick={() => {setForgotOpen(true)}} variant='link' className="px-0">Forgot Password</Button>
          </div>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            className='w-full bg-[#032b62] hover:bg-[#032869e5] transition-all ease-in-out'
          >
            Sign in to dashboard
          </Button>

          <div className="flex items-center mt-1">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>


          {/* Continue with Google */}
          <Button
            variant='outline'
            className='w-full mt-2 flex items-center justify-center gap-2'
          >
            <img src={googleIcon} alt="Google" className="h-5 w-5" />
            Continue with Google
          </Button>

          {/* Signup */}
          {/* <p className='text-sm text-center'>
            Don't have an account:
            <Button className='text-sm -ml-2' variant='link' onClick={() => { navigate('/sign-up') }}>Sign up</Button>
          </p> */}
        </div>
      </div>
      <ForgotPasswordDialog
        open={forgotOpen}
        onClose={() => setForgotOpen(false)}
      />
    </div>
  )
}

export default Login
