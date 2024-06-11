import React from 'react'
import Linkedin from "../public/linkedin.png"

function Fotter() {
  return (
   <>
   <div className=' mt-20 flex items-center gap-4'>
   <img className='w-10 h-10' src={Linkedin} alt='insta'/>
   <a className=' underline underline-offset-2 hover:underline-offset-0' target='_blank' href="https://www.linkedin.com/in/abhinay-ma-8041012b7">ABHNIAY_MA</a>
   </div>
   </>
  )
}

export default Fotter
