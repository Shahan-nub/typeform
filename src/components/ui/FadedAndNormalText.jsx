
export default function FadedAndNormalText({text_dark,text_white}) {
  return (
    <div className="relative font-sans  text-center">
      <div className="absolute text-white text-sm lg:text-2xl top-1/2 -translate-y-[50%]   lg:-translate-y-[40%] left-1/2 -translate-x-[50%] font-semibold ">{text_white}</div>
      <h1 className="text-[#232a4b] lg:text-glass font-semibold text-7xl lg:text-9xl">{text_dark}</h1>
    </div>
  )
}
