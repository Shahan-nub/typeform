import { WORK_IMAGES } from "@/CONSTANTS/WorkImages";
import WorkTemplate from "./WorkTemplate";
import WorkTitle from "./WorkTitle";
import Glow from "../ui/Glow";

export default function Work() {
  return (
    <div className="my-20 flex flex-col w-full" id="work">
      <WorkTitle></WorkTitle>
      <div className="w-full relative flex flex-wrap gap-8 justify-center px-6 md:px-16">
        <Glow pos="left-1/2 -translate-x-[50%]"></Glow>
        <Glow pos="left-1/2 -translate-x-[50%] bottom-8"></Glow>

        {WORK_IMAGES.map((img) => {
          return <WorkTemplate id={img.id} src={img.src} key={img.id} link={img.link}></WorkTemplate>
        })}
      </div>
    </div>
  );
}
