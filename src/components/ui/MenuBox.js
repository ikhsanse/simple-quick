import React from 'react'

const MenuBox = (props) => {
  return (
    <div className='h-[493px] w-[490px] 2xl:h-[737px] 2xl:w-[734px] bg-white rounded absolute bottom-[110px] right-[34px]'>
        {props.children}
    </div>
  )
}

export default MenuBox