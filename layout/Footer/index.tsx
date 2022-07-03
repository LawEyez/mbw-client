import Link from "next/link"

import Brand from "@components/Brand"
import { contactInfo } from "config"


const Footer = () => {
  return (
    <footer id="footer" className="w-full p-8 bg-neutral-900 text-white flex flex-col justify-between lg:flex-row
    lg:items-center lg:px-[20%] space-y-10 lg:space-y-0">

      <Link href='/' passHref>
        <a>
          <h1 className="text-4xl text-neutral-700 tracking-tighter">mrowa</h1>
        </a>
      </Link>

      <div className="w-max">
        <h3 className="text-sm capitalize mb-2">company</h3>

        <ul className="space-y-1">
          <li className="text-xs capitalize font-light text-neutral-400 hover:text-white transition duration-200">
            <Link href='/'>about</Link>
          </li>

          <li className="text-xs capitalize font-light text-neutral-400 hover:text-white transition duration-200">
            <Link href='/'>our team</Link>
          </li>

          <li className="text-xs capitalize font-light text-neutral-400 hover:text-white transition duration-200">
            <Link href='/'>careers</Link>
          </li>

          <li className="text-xs capitalize font-light text-neutral-400 hover:text-white transition duration-200">
            <Link href='/'>contact</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-neutral-400 font-light">{contactInfo.streetAddress}</p>
        <p className="text-xs text-neutral-400 font-light">{contactInfo.email}</p>
        <p className="text-xs text-neutral-400 font-light">{contactInfo.phone} | {contactInfo.secondaryPhone}</p>
      </div>
    </footer>
  )
}

export default Footer