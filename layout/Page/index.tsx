import { ReactNode } from "react"

import SEO, { SEOProps } from "@components/SEO"
import Navigation from "@components/Navigation"
import Brand from "@components/Brand"

import Footer from "@layout/Footer"


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
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Page