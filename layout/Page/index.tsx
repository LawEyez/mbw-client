import SEO, { SEOProps } from "@components/SEO"
import { ReactNode } from "react"


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

      <main className="">
        {children}
      </main>
    </>
  )
}

export default Page