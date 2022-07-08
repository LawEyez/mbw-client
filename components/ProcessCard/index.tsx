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
    xl:flex-row xl:items-center gap-8 w-96 xl:w-[500px]'>
      <img
        src={image}
        alt={title}
        className='absolute w-1/2 -z-[1] top-0 right-0'
      />

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
        <p className='text-neutral-200 font-light'>{content}</p>
      </div>

    </div>
  )
}

export default ProcessCard