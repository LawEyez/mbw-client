import { useState } from "react"

import NavLink from "@components/NavLink"
import { CgMenuRight } from "react-icons/cg"


const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 z-50 px-8 py-10 h-screen w-full
      flex flex-col justify-center bg-black/40 backdrop-blur ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      xl:translate-x-0 xl:top-1/2 xl:left-0 xl:-translate-y-1/2 xl:border-r xl:border-white/20
      xl:w-max xl:h-max xl:bg-transparent xl:backdrop-blur-none 
      transition duration-300`}>
        <NavLink name="home" path="/" />
        <NavLink name="about" path="/about" />
        <NavLink name="our process" path="/process" />
        <NavLink name="what we do" path="/whatwedo" />
        <NavLink name="testimonials" path="/testimonials" />
        <NavLink name="team" path="/team" />
      </nav>

      <button
        className="fixed z-50 top-8 right-8 xl:hidden text-white text-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgMenuRight />
      </button>
    </>
  )
}

export default Navigation