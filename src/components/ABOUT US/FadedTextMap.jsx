import FadedAndNormalText from "../ui/FadedAndNormalText";
import Glow from "../ui/Glow";

export default function FadedTextMap() {
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full flex divide-x divide-opacity-20 divide-white ">
        <div className="flex basis-1/2 justify-center items-center">
          <FadedAndNormalText
            text_dark="200"
            text_white="Projects"
          ></FadedAndNormalText>
        </div>
        <div className="flex basis-1/2 justify-center items-center">
          <FadedAndNormalText
            text_dark="80"
            text_white="People"
          ></FadedAndNormalText>
        </div>
      </div>
      <div className="w-full flex divide-x divide-opacity-20 divide-white ">
        <div className="flex basis-1/2 justify-center items-center">
          <FadedAndNormalText
            text_dark="05"
            text_white="Years"
          ></FadedAndNormalText>
        </div>
        <div className="flex basis-1/2 justify-center items-center">
          <FadedAndNormalText
            text_dark="40"
            text_white="Offices"
          ></FadedAndNormalText>
        </div>
      </div>
    </div>
  );
}
