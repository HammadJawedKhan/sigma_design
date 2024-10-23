import React from 'react'

export default function page() {
  return (
    <div>
    <div className='flex ml-14 mb-4 mt-4'>
  <div className="flex rotate-scale-up-diag-1 border-2  w-[90%] h-[500px] bg-white p-3 justify-center">
  
  <div className='ml-14'>
        <h1 className='font-light text-5xl text-stone-400 mt-5 '>Contact</h1>
        <h2 className='font-extrabold text-5xl mt-3'>Information</h2>
        <h1 className='font-bold mt-4'>Company Name</h1>
        <h1>1234 Sample Street Austin Texas 76401 </h1>
        <p className='font-bold mt-8'>512.333.2222</p>
        <p className='mt-'>sampleemail@gmail.com</p>
        
<button className="btn btn-neutral">CONTACT US</button>
      </div>
  </div>
  <div className='ml-56'>
  <iframe className="w-[700px] h-[450px] "
   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28941.311047229745!2d66.9868871!3d24.94351785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1729687628663!5m2!1sen!2s" ></iframe>
  </div>
</div>
</div>
    
  )
}
