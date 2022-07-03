import Link from "next/link"

const Footer = () => {
  return (
    <footer id="footer" className="w-full p-8 bg-neutral-900 text-white flex flex-col">
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
    </footer>
  )
}

export default Footer