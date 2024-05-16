import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function RotatingText() {
  return (
    <div className="absolute left-1/2 top-[80%] lg:top-[85%] -translate-x-[50%] ">
        <div className="relative">
          <div className="absolute left-1/2 z-30 -translate-x-[50%] -translate-y-[50%] top-1/2 bg-color-1 rounded-full p-2 lg:p-6 text-white text-sm lg:text-2xl rotate-90">
            <FaArrowRightLong></FaArrowRightLong>
          </div>
          <Image
            src="/assets/rotatingText.png"
            height={200}
            width={200}
            className="h-20 lg:h-36 w-20 lg:w-36 animate-infinite-rotate "
          ></Image>
        </div>
      </div>
  )
}
