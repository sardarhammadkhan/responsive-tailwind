import React,{useState} from 'react'
import {navLinks} from '../Constant'
import {logo,menu,close} from '../assets'
function Navbar() {
 const[togglenav,settogglenav]= useState(false)
 console.log(togglenav);
  return (
    <nav className='w-full  py-6 flex justify-between items-center'>
      <img src={logo} alt='logo' className='w-[124px] h-[32px]'/>
     <ul className='list-none sm:flex  hidden justify-end items-center flex-1'>
    {navLinks.map((nav,index)=>(
      <li className={`text-white text-[16px] font-popins font-normal cursor-pointer ${index==navLinks.length-1?"mr-0": "mr-10"}`} key={nav.id}><a href="">{nav.title}</a></li>
    ))}
     </ul>
     <div className='sm:hidden flex flex-1 justify-end items-center' onClick={()=>settogglenav(prevState=>!prevState)}>
      
      <img src={togglenav?close:menu} alt='menu' className='w-[28px] h-[28px]  cursor-pointer object-contain' ></img>

     <div className={`${togglenav ? 'flex':'hidden'} min-w-[140px] sidebar  absolute top-12 right-0 mx-4 my-2 p-5 rounded-lg h-auto  bg-black-gradient w-[200px]`}>
        {togglenav?
        <ul className='list-none flex flex-col justify-end items-center flex-1  '>
        {navLinks.map((nav,index)=>(
          <li className={`text-white text-[16px]  font-popins font-normal cursor-pointer ${index==navLinks.length-1?"mb-0": "mb-4"}`} key={nav.id}><a href="">{nav.title}</a></li>
        ))}
         </ul>
    :''}
     </div>

    
       </div>
    </nav>
  )
}

export default Navbar
