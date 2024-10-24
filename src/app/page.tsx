import React from 'react'
import Image from 'next/image'
import img from "../../public/Rectangle 6.png"
import img1 from "../../public/Group 13@2x.png"
export default function page() {
  return (
    <div>
    <div className='flex flex-col lg:flex-row lg:ml-14 mb-4 mt-4'>
        {/* Left Section */}
        <div className="lg:w-1/2 p-4 lg:ml-0">
          <div className="mt-44 lg:ml-20 ">
            <h1 className='font-light text-3xl md:text-5xl text-gray-400 mt-5'>
              Project
            </h1>
            <h2 className='font-extrabold text-3xl md:text-5xl mt-3'>
              lorem
            </h2>
            
          </div>
        </div>

        {/* Right Section */}
        <div className=' lg:ml-12 lg:w-1/2 p-4 mr-20'>
        <Image src={img} alt='' />  
        </div>
      </div> 
       <div>
        <Image src={img1} alt=''/>
       </div>
    </div>
)
}