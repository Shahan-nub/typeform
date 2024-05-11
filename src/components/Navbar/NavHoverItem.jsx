import { IoIosArrowDown } from "react-icons/io";

export default function NavHoverItem({title,itemsArr}) {
  return (
    <div className="group flex flex-col">
      <div className="group flex text-white items-center gap-2 md:gap-3">
        <div className="">{title}</div>
        <IoIosArrowDown className=" group-hover:rotate-[540deg] transition-all duration-500 ease-in-out"></IoIosArrowDown>
      </div>
      {/* hover part  */}
      <div className="text-gray-300 text-sm lg:text-base lg:-translate-y-5 group-hover:translate-y-5 lg:group-hover:opacity-100 lg:opacity-0 transition-all duration-[600ms] backdrop-blur shadow-xl rounded-lg bg-[rgb(228_228_228)] bg-opacity-[15%] md:px-4 md:py-3 p-2">
        {itemsArr.map(({item}) => {
            return(
                <p className="">{item}</p>
            )
        })}
      </div>
    </div>
  );
}
