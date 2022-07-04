import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import Page from "@layout/Page"


const About: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'About Mrowa Building Workshop',
        desc: 'Learn more about Mrowa Building Workshop'
      }}
    >
      {/* <img
        className="absolute w-48 h-auto top-48 right-10"
        src={data.image}
        alt="about_img"
      /> */}

      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="w-72 h-64 overflow-y-scroll pr-4
        rounded md:w-96 lg:w-80 before:content-[''] before:w-16 before:h-2
        before:rounded before:bg-white before:block before:mb-8">
          <p className="text-md text-neutral-300 font-light leading-normal">{data.content}</p>
        </div>

        <h2 className="text-6xl font-bold tracking-tighter mb-10 md:mb-0 md:ml-8">about us</h2>
      </div>
    </Page>
  )
}

export default About

interface IData {
  id: number,
  url: string,
  title: string,
  content: string,
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/about-us')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}