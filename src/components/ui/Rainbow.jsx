import Image from 'next/image'

export default function Rainbow() {
  return (
    <div className="RAINBOW absolute w-8  md:w-14 h-10 rotate-[135deg] left-4 md:left-9">
        <Image src="/assets/rainbow.webp" width={100} height={100}></Image>
      </div>
  )
}
