import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.webp'
import Link from 'next/link'
import {ShoppingCart} from "lucide-react"
import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { App_Links } from '@/utils/constant'


const Header = () => {
  return (
    <div className=''>
    <div className='md:flex justify-between items-center py-8'>
        <div><Link href='/'><Image src={logo} alt='logo'/></Link></div>
        
      <div className='md:flex py-5 gap-x-10'>
      {App_Links.map((link)=>(<Link href={link.href}><p>{link.name}</p></Link>))} 
    
      </div>

            {/* <ul className='flex gap-x-5'>
                <li><Link href='/'>Female</Link></li>
                <li><Link href='/'>Male</Link></li>
                <li><Link href='/'>Kids</Link></li>
                <li><Link href='/'>All Products</Link></li>
            </ul> */}
        <div className='flex border-solid border-2 rounded-md w-52'>
            <div className='h-8 w-8 flex justify-center items-center'>
                <Search />
            </div>
            <div><Input className='h-8' placeholder='what you looking for'/>
            </div>
        </div>
      
       
        <div className='h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center relative my-5 md:flex-row'> 
            <p className='text-white bg-red-500 rounded-full text-xs flex justify-center w-4 h-4 absolute right-0 top-0'>0</p>
             <ShoppingCart/>
          </div>
      
      
    </div>

    </div> 

  )

  
}

export default Header