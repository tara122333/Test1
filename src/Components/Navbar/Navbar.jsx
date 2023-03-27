import React, { useState } from 'react'
import {BiMenu} from 'react-icons/bi';
// import {RxCross2} from 'react-icons/rx';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    let temp = isOpen;
    // console.log("This is temp");
    // console.log(temp)
    // console.log(isOpen);
  return (
    <>
        <nav className='bg-red-100'>
            <div className='flex items-center font-medium justify-around flex-col md:flex-row'>
                <div className='flex justify-between w-full md:w-auto px-8 py-4 md:px-2 md:py-2'>
                    <div className='h-9 w-9'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="" className='h-full w-full' />
                    </div>
                    <div className='text-3xl md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)} >
                        {
                            isOpen ? <h1 className='text-2xl font-semibold'>X</h1> : <BiMenu/> 
                        }
                    </div>
                </div>
                {/*  for pc and tablet */}
                <div className=' hidden md:flex'>
                    <ul className='md:flex hidden items-center gap-8'>
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <NavLinks temp={temp} />
                    </ul>
                </div>
                <div>

                </div>
                    <ul className={`md:hidden bg-white absolute w-full h-full  bottom-0 top-16 duration-500 ${isOpen ? 'right-0' : 'left-[-100%]'}`}>
                        <li>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Home
                            </Link>
                        </li>
                        <NavLinks temp={temp} />
                    </ul>
            </div>
        </nav>
        <div className=''>
            <h1>This is Tara Chand And Tara Chand is good boy</h1>
        </div>
    </>
  )
}

export default Navbar