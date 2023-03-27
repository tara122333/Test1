import React, {  useState } from 'react'
import { Link } from "react-router-dom";
import { links } from '../links/MyLinks'
import {HiChevronDown} from 'react-icons/hi';

const NavLinks = (props) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
  return (
    <>
        {
            links.map((link)=>(
                <div className=''>
                    {/* Pc */}
                    <div className='px-3 text-left md:cursor-pointer group h-full w-full'>
                        <h1 className='flex items-center justify-between py-7 px-3 md:cursor-pointer group' 
                        onClick={()=>
                            {
                                heading !== link.name ? setHeading(link.name) : 
                                setHeading("");
                                setSubHeading("");
                        }
                            }>
                            {link.name}

                            {/* DownArroe for mobile*/}
                            <span className='text-xl md:hidden inline '>
                                {
                                    heading === link.name ?  "x" : <HiChevronDown /> 
                                }
                            </span>

                            {/* DownArroe for pc */}
                            <span className="text-xl md:ml-1 md:block hidden group-hover:rotate-180">
                                <HiChevronDown />
                            </span>
                        </h1>
                        {
                            link.submenu && (
                                <div className='absolute top-20 left-0 hidden group-hover:md:block hover:md:block w-full'>
                                    <div className='bg-blue-400 border-2 border-blue-600 text-white p-5 grid grid-cols-4 gap-10 w-full'> 
                                        {
                                            link.sublinks.map((mysublinks)=>(
                                                <div>
                                                    <h1 className='text-lg font-semibold cursor-pointer'>
                                                        {
                                                            mysublinks.Head
                                                        }
                                                        
                                                    </h1>
                                                    {
                                                        mysublinks.sublink.map((slink)=>(  
                                                            <li className='text-sm text-gray-600 my-2.5'>
                                                                <Link to={slink.link} className="hover:text-red-500 text-black">
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    {/* Mobile */}
                    <div className={`
                        ${heading === link.name ? 'md:hidden' : 'hidden'}
                        `}
                        >
                        {
                            link.sublinks.map((slinks)=>(
                                <div className=''>
                                    <div className=''>
                                        <h1 onClick={
                                            ()=> subHeading !== slinks.Head ? setSubHeading(slinks.Head): setSubHeading("")
                                        } className='py-4 pl-7 font-bold flex justify-between pr-8'>
                                            {slinks.Head}
                                            <span className='text-xl md:hidden inline font-semibold'>
                                                            {
                                                                subHeading === slinks.Head ?  "x" : <HiChevronDown/> 
                                                            }
                                            </span>
                                        </h1>
                                    </div>
                                    <div className={`
                                        ${subHeading === slinks.Head ? 'md:hidden' : 'hidden'}
                                    `}>
                                        {
                                            slinks.sublink.map((slink)=>(
                                                <li className='py-4 pl-14'>
                                                    
                                                    <Link to={slink.link}>
                                                        {slink.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            ))
        }
    </>
  )
}

export default NavLinks