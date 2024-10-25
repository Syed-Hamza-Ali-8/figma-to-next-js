import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="flex justify-center items-center flex-col-reverse lg:flex-row gap-20 my-20 lg:my-36 mx-auto w-full">
            <div className="flex flex-col justify-center gap-y-6 md:w-1/2 p-5 md:p-0 ">
                <h1 className="font-heebo font-extrabold text-4xl md:text-5xl text-customBlue">Hi, I am John, <br />
                    Creative Technologist</h1>
                <p className="font-heebo font-normal text-[16px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="bg-customPink p-2 w-52 h-12 text-white font-heebo font-[500px] text-lg rounded-sm hover:bg-customBlue transition-colors duration-300 ease-linear" style={{ boxShadow: "0 4px 4px 0 #4141418",backgroundColor:"#F98585" }}>Download Resume</button>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="absolute bg-[#AA9F9F4F] lg:size-[300px] md:size-[300px] sm:size-[300px] size-[200px] -z-10 rounded-full -left-3 -bottom-2 " />
                <Image
                    src="/hero-image.png"
                    alt="Hero Section Image"
                    width={300}
                    height={300}
                    className="rounded-full size-[200px] sm:size-[300px] md:size-[300px]  lg:size-[300px]"
                />
            </div>
        </section>
    );
};

export default HeroSection;