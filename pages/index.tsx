import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'

import Page from '@layout/Page'

import Scroll from '@components/Scroll'


const Home: NextPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      meta={{
        title: 'Home',
        desc: 'Welcome to Mrowa Building Workshop.'
      }}
    >
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
        flex items-center justify-center p-8">
          <Scroll />

          <div className="mx-auto pr-4 sm:pr-0 text-end w-[80%] md:w-[50%] xl:w-[40%]">
            <h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter">{data[0].title}.</h1>
            <p className="mt-8 text-neutral-300">we sculpture entire cities.</p>
          </div>
        </div>

      </div>
    </Page>
  )
}

export default Home

interface HomeData {
  id: number,
  title: string,
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: HomeData[] = await fetch('https://mbw-site.herokuapp.com/api/v1/home/')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}