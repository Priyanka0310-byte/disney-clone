import React from 'react'

function HeaderItem({name, Icons}) {
  return (
    <div className='flex items-center text-white gap-2 text-[18px] hover:underline underline-offset-4'>
    <Icons/>
    <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem