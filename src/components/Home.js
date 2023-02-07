import React, {useState } from 'react'
import searchIcon from '../icons/search.svg'

const Home = () => {
    const [searchShow, setSearchShow] = useState(true);
  return (
    <>
    <div className='grid grid-cols-5'>
        <div className='border-r-2 border-slate-300 h-screen'>
        </div>
        <div className='col-span-4'>
            <div className='2xl:h-[70px] h-30 relative'>
                <img src={searchIcon} className={`absolute ${searchShow ? 'block' : 'hidden' } w-[12px] top-[35%] ease-in duration-200 ml-7`} alt="" />
                <input type="text" onFocus={()=>setSearchShow(false)} onBlur={()=>setSearchShow(true)} name="" className='w-full pl-14 h-full text-white bg-home-input focus:ring-0 focus:outline-0'  id="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home