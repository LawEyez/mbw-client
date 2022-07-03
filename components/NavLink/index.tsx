import Link from "next/link"
import { useRouter } from "next/router"

import { NavLinkProps } from "./types"


const NavLink = ({
  name,
  path
}: NavLinkProps) => {
  // Get router.
  const router = useRouter()

  // Add styles if active.
  const activeStyles = router.asPath === path && (
    '-translate-y-[100%] transition duration-200'
  )

  return (
    <Link href={path} passHref>
      <a className="group relative block h-12 w-max overflow-hidden">
        <span className={`${activeStyles} block text-5xl font-thin text-white/30 group-hover:-translate-y-[100%] transition duration-200`}>{name}</span>
        <span className={`${activeStyles} block text-5xl font-semibold text-white group-hover:-translate-y-[100%] transition duration-200`}>{name}</span>
      </a>
    </Link>
  )
}

export default NavLink