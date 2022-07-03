import Link from 'next/link'


const Brand = () => {
  return (
    <div className='fixed top-8 left-8 z-50 text-white font-semibold tracking-tighter
    flex items-center before:content-[""] before:bg-white/30 before:w-5 before:h-[1px]
    before:mr-2 before:translate-y-[2px]'>
      <Link href='/'>mrowa</Link>
    </div>
  )
}

export default Brand