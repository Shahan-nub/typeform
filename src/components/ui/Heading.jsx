import Glow from "./Glow";

export default function Heading({text1,text2}) {
  return (
    <div className="relative text-2xl md:text-5xl font-semibold font-sans text-white">
      <h1 className="text-color-1">{text1}</h1>
      <h1 className="mt-4"> {text2}</h1>
      <Glow pos="right-1/4 bottom-16 "></Glow>
    </div>
  );
}
