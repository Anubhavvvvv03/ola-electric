import {  Link } from "lucide-react";
import Image from 'next/image';
export default function Charging() {
    return (
        <div className="bg-white p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Your Eyes on the Road.<br/>Ours on your Ola S1</h1>
          <p className="text-lg text-gray-600 mt-4">Doorstep service. Pickup and drop service. At your fingertips.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 p-16">
          <div className="space-y-4 ">
            <Image width={500} height={500} src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img1_071123.webp" alt="Roadside assistance" className="w-full"/>
            <h2 className="text-xl font-semibold">Roadside assistance</h2>
            <p>Go wherever the road takes you. We are never too far.</p>
            <a href="#" className="text-blue-600 hover:text-blue-800">More about Roadside Assistance →</a>
          </div>
          <div className="space-y-4">
            <Image  width={500} height={500} src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img2_071123.webp" alt="Scooter Insurance" className="w-full"/>
            <h2 className="text-xl font-semibold">Scooter Insurance</h2>
            <p>Insurance just as smooth as your ride.</p>
            <a href="#" className="text-blue-600 hover:text-blue-800">Purchase Now →</a>
          </div>
          <div className="space-y-4">
            <Image  width={500} height={500} src="https://cdn.olaelectric.com/sites/evdp/pages/s1pro/your_eyes_img3_071123.webp" alt="Warranty" className="w-full"/>
            <h2 className="text-xl font-semibold">Warranty. Easy peasy.</h2>
            <p>Extended warranty of up to 1.25 Lakh Km with your Ola S1.</p>
            <a href="#" className="text-blue-600 hover:text-blue-800">Explore Plans →</a>
          </div>
        </div>
      </div>
    )
  }