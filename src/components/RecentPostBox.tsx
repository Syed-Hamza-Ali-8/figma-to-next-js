const RecentPostBox = () => {
    return (
        <div className="bg-white p-8 border-2 border-transparent hover:border-pink-600 transition-colors duration-300 ease-in-out">
            <h2 className="font-heebo font-bold text-[26px]">
                Making a design system from scratch
            </h2>
            <div className="font-heebo lg:text-lg md:text-lg text-[14px] font-normal w-[300px] h-[42px] lg:gap-4 md:gap-4 gap-2 flex py-8 text-[#000000B2]">
                <p>12 Feb 2020 </p>
                <p>|</p>
                <p>Design, Pattern</p>
            </div>
            <p className="font-heebo font-normal py-8 pr-8 text-customBlue">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
            </p>
        </div>
    );
};

export default RecentPostBox;