import React from 'react'
import WhatWeDoTitle from './WhatWeDoTitle'
import FeaturesCard from './FeaturesCard'
import { ICONS } from '@/CONSTANTS/FeatureIcons'

export default function WhatWeDo() {
  return (
    <div className='w-full flex flex-col items-center px-4 md:px-10'>
      <WhatWeDoTitle></WhatWeDoTitle>
      <div className="flex flex-wrap w-full justify-between my-7">
        {ICONS.map((img) => {
           return <FeaturesCard src={img.src} title={img.title} id={img.id} key={img.id}></FeaturesCard>
        })}
      </div>
    </div>
  )
}
