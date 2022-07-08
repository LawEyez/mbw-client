import { useCallback, useEffect, useState } from "react"
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import useEmblaCarousel from 'embla-carousel-react'

import Page from "@layout/Page"
import ProcessCard from "@components/ProcessCard"
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"


const OurProcess: NextPage = ({
  data 
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [emblaRef, embla] = useEmblaCarousel()

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Page
      meta={{
        title: 'Our Process',
        desc: 'Our approach to building and construction.'
      }}
    >
      <div className="overflow-hidden xl:h-1/2 xl:w-7/12" ref={emblaRef}>
        <div className="flex items-center gap-20">
          {data.sub_sections.map((item: any, i:number) => (
            <div
              key={item.id}
              className='relative flex-shrink-0 flex-grow-0'
            >
              <ProcessCard
                title={item.title}
                content={item.content}
                image={item.image}
                count={i + 1}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 absolute top-[15%] right-8">
        <button className="w-20 h-20 xl:w-80 xl:h-80 flex items-center justify-center border
        border-white/20 rounded-full text-xl xl:text-5xl hover:border-white hover:bg-white
        hover:text-neutral-900 mix-blend-difference transition duration-200"
        onClick={scrollPrev}
        >
          <CgArrowLongLeft />
        </button>

        <button className="w-20 h-20 xl:w-80 xl:h-80 flex items-center justify-center border
        border-white/20 rounded-full text-xl xl:text-5xl hover:border-white hover:bg-white
        hover:text-neutral-900 mix-blend-difference transition duration-200"
          onClick={scrollNext}
        >
          <CgArrowLongRight />
        </button>
      </div>
    </Page>
  )
}

export default OurProcess

interface IData {

}

export const getStaticProps: GetStaticProps = async () => {
  const data: IData = await fetch('https://mbw-site.herokuapp.com/api/v1/sections/our-process')
    .then(res => res.json())

  return {
    props: {
      data
    }
  }
}