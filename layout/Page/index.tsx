import { ReactNode } from "react"

import SEO, { SEOProps } from "@components/SEO"
import Navigation from "@components/Navigation"
import Brand from "@components/Brand"

import Footer from "@layout/Footer"
import Scroll from "@components/Scroll"


type PageProps = {
  meta?: SEOProps,
  children?: ReactNode
}

const Page = ({
  meta,
  children
}: PageProps) => {
  return (
    <>
      <SEO {...meta} />

      <Brand />
      <Navigation />

      <main className="relative bg-neutral-900 text-white min-h-screen w-full">
        <div className="relative w-full h-screen">
          <img
            className='absolute w-full h-full object-cover'
            src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="home_cover"
          />

      {/* <Image
            className='object-cover'
            src={'https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            alt="home"
            // width={`100%`}
            // height={`100%`}
            objectFit='cover'
            layout='fill'
          /> */}

          <div className="absolute z-10 h-full w-full bg-gradient-to-r from-black/80 to-black/60
          flex items-center justify-center p-4">
            <Scroll />

            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Page