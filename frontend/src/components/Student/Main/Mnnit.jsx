import React from 'react'
import './Mnnit.css'
function Mnnit() {

    function openWebsite() {
        window.open('http://www.mmmut.ac.in/', '_blank');
      }
  return (


    
    <div className='Mnnit_div'style={{fontFamily:"Agbalumo"}}>
      <div className="abcd"style={{fontFamily:"Agbalumo"}}>
        <div className="sumit_box">
        <span className='Mln_text'>Madan Mohan Malaviya University Of </span>
        <span className='Mln_text'>Technology</span>
        </div>
        
      <div className='box_mnnit'  >
      <button onClick={openWebsite} href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">MMMUT Gorakhpur</span>
</span>
</button>
<p>MMMUT Official Website</p>
      </div>
      </div>
    </div>
  )
}

export default Mnnit
