import { FeaturedWorksProps } from "../types/componentTypes";
import Image from "next/image";

const FeaturedWorksBox: React.FC<FeaturedWorksProps> = ({ href }) => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-start mx-0 sm:mx-10 md:mx-0 lg:mx-0 gap-5 mb-28">
            <div className="">
                <Image
                    src={href}
                    alt="Designing Dashboard"
                    width={200}
                    height={200}
                    className="w-56 lg:w-full md:w-full rounded-md"
                />
            </div>
            <div className="w-[70%] lg:w-[47%] md:w-[47%]">
                <h3 className="font-heebo font-bold text-3xl pb-4">
                    Designing Dashboards
                </h3>
                <div className="flex gap-4 pb-4">
                    <span className="bg-customPink text-white px-3 pt-0.5 rounded-full">
                        2020
                    </span>
                    <span className="text-xl text-[#0000009E] font-heebo">
                        Dashboard
                    </span>
                </div>
                <p className="font-heebo md:text-lg lg:text-lg font-light ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    );
};

export default FeaturedWorksBox;