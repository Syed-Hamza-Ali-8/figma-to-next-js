import FeaturedWorkBox from '../components/FeaturedWorkBox';

const FeaturedWorks = () => {
    return (
        <div className='mx-6 sm:mx-20 md:mx-20 lg:mx-40 my-20 w-full'>
            <h2 className='font-heebo font-semibold lg:text-xl text-xl pb-8'>Featured Works</h2>
            <FeaturedWorkBox href="/Rectangle 30.png" />
            <FeaturedWorkBox href="/Rectangle 32.png" />
            <FeaturedWorkBox href="/Rectangle 34.png" />
        </div>
    );
};

export default FeaturedWorks;