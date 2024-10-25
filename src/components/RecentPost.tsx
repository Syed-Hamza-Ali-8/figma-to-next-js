import Link from "next/link";
import RecentPostBox from "./RecentPostBox";

const RecentPosts = () => {
    return (
        <section className="bg-[#F4E2E2] w-full h-auto pb-12">
            <div className="flex justify-between px-4 md:px-16 lg:px-28 py-6">
                <h1 className="px-10 font-semibold font-heebo ;lg:text-lg md:text-[22px] text-[16px]">
                    Recent Post
                </h1>
                <Link
                    href="/"
                    className="text-customPink px-10 font-semibold font-heebo lg:text-lg md:text-[22px] text-[16px]"
                >
                    View All
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row mx-4 md:mx-14 lg:mx-40 gap-12 h-auto">
                <RecentPostBox />
                <RecentPostBox />
            </div>
        </section>
    );
};

export default RecentPosts;