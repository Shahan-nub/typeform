import InfiniteSlider from "../ui/InfiniteSlider";
import Journey from "./Journey";
import ServicesHero from "./ServicesHero";
import ServicesInfo from "./ServicesInfo";
import ServicesTitle from "./ServicesTitle";

export default function Services() {
  return (
    <div className="w-full relative flex flex-col py-6 lg:py-12 font-sans">
      <ServicesTitle></ServicesTitle>
      <ServicesHero></ServicesHero>
      <InfiniteSlider bg_text_style="bg-glass text-white" title="Charles-Kelly &nbsp;&nbsp;   X &nbsp; &nbsp;   Blossom &nbsp;&nbsp;  X &nbsp;&nbsp;  Gedoly"></InfiniteSlider>
      <ServicesInfo></ServicesInfo>
      <Journey></Journey>
    </div>
  )
}
