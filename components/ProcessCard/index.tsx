import React from 'react'

import { ProcessCardProps } from './types'


const ProcessCard = ({
  title,
  content,
  image,
  count
}: ProcessCardProps) => {
  const countNum = `00${count}`

  return (
    <div className='cursor-default flex flex-col items-center
    xl:flex-row xl:items-center gap-8 w-80 xl:w-[500px]'>
      <div className='absolute w-64 h-48 -z-[1] top-0 right-0 -translate-y-10'>
        <img
          src={image}
          alt={title}
          className='absolute h-full w-full object-cover -z-[1]'
        />
        
        <div className='aboslute z-20 h-full w-full bg-black/40'/>
      </div>

      <div
        className='text-6xl font-bold text-white'
        style={{ textShadow: '0 1px 5px rgba(0,0,0,.5)'}}
      >{countNum}</div>

      <div className=''>
        <h2 className='tracking-tighter text-5xl font-semibold mb-8
        after:content-[""] after:block after:w-20 after:h-1 after:bg-white
        after:mt-4'
        style={{ textShadow: '0 1px 5px rgba(0,0,0,.5)'}}
        >{title}</h2>
        <p className='text-whitefont-light'
        style={{ textShadow: '0 1px 5px rgba(0,0,0,.5)'}}
        >{content}</p>
      </div>

    </div>
  )
}

export default ProcessCard