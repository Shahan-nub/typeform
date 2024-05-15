import Image from "next/image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function Journey() {
  return (
    <div className="flex w-full px-5 lg:px-8 justify-between">
      <div className="basis-[45%] hidden lg:inline-block">
        <Image
          src="/assets/Servicesvertical.png"
          alt="services"
          height={800}
          width={700}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="basis-[45%] flex flex-col justify-center gap-5 lg:gap-9">
        <Heading
          text1="Your journey into the"
          text2=" future starts now"
        ></Heading>
        <p className="text-color-3 lg:text-xl font-light text-sm w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime
          sequi incidunt vel alias excepturi beatae at non, omnis qui?
        </p>
        <ul className="flex flex-col gap-3 lg:gap-6 text-white marker:text-cyan-400 font-medium lg:font-semibold list-disc px-4 lg:px-5 lg:text-lg">
          <li>Create algorithms.</li>
          <li>Opt for the right platform.</li>
          <li>Train the algorithms.</li>
        </ul>
        <div className="w-max">
          <Button text="Get started"></Button>
        </div>
      </div>
    </div>
  );
}
