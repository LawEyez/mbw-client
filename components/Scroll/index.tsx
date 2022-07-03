import { CgArrowLongDown } from 'react-icons/cg' 

const Scroll = () => {
  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 h-full flex flex-col items-center'>
      <div className='h-full w-[1px] bg-white/10'/>
      <a href="#footer" className='absolute w-12 h-12 rounded-full border-2 border-white/30
      bottom-[10%] flex items-center justify-center hover:border-white transition duration-200'>
        <CgArrowLongDown />
      </a>
    </div>
  )
}

export default Scroll