import Logo from "../ui/Logo";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Glow from "../ui/Glow";
import Link from "next/link";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <div className="flex flex-col w-full  bg-gradient-to-r from-glass via-[#1c1f2f] to-glass">
      <div className="w-full relative font-sans  py-10 lg:py-20 flex justify-between lg:justify-normal gap-6 lg:gap-40  px-3 lg:px-6 text-xs lg:text-lg">
        <Glow pos="right-[10%] top-[35%]"></Glow>

        <div className=" flex flex-col justify-between gap-6 lg:gap-16 ">
          <Logo></Logo>
          <div className="lg:hidden text-color-1 text-center">Inspire</div>
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="hidden lg:inline-block text-color-3 font-lght text-xs lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo
              fuga cupiditate commodi.
            </div>
            <div className="flex text-white text-base lg:text-xl gap-3 lg:gap-8">
              <IoLogoGithub></IoLogoGithub>
              <FaInstagram></FaInstagram>
              <FaFacebookF />
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left flex flex-col gap-6 lg:gap-16 text-color-3">
          <h1 className=" text-lg lg:text-xl font-medium lg:font-semibold text-white">
            Location
          </h1>
          <div className="flex flex-col gap-2 lg:gap-3">
            <p className="">
              741024 <br className="lg:hidden" /> Bhubaneswar, Odisha
            </p>
            <p>+91, India</p>
            <h4 className="text-white">9113781424</h4>
            <p className="hover:text-color-1 hidden lg:inline-block">
              shahananwer786@gmail.com
            </p>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-6 lg:gap-16 text-color-3">
          <h1 className="text-lg lg:text-xl font-medium lg:font-semibold text-white">
            Explore
          </h1>
          <div className="flex flex-col gap-4 lg:gap-6">
            <Link
              href="/about-us"
              className="cursor-pointer hover:text-color-1"
            >
              About
            </Link>
            <Link
              href="/services"
              className="cursor-pointer hover:text-color-1"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="cursor-pointer hover:text-color-1"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className=" flex flex-col gap-5 lg:gap-10">
          <h1 className="text-lg lg:text-xl font-medium lg:font-semibold text-white">
            Get in touch.
          </h1>
          <Button text="Contact us"/>
        </div>
      </div>
      <div className="flex w-[95%] items-center self-center justify-between border-t border-gray-700 py-3 lg:py-6  text-white">
        <p className="font-semibold italic">All rights reserved.</p>
        <p>&copy;</p>
      </div>
    </div>
  );
}
