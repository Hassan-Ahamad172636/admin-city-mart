import Lottie from "lottie-react"
import React from "react"
import animation from '../../assets/Hello.json'

function Dashboard() {

  return (
    <div>
      <div className="bg-white rounded-2xl p-5 grid grid-cols-2">
        <div className="flex justify-start">
          <Lottie animationData={animation} loop className="h-32"></Lottie>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
