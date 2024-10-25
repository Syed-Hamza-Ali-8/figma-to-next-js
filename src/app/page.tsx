import FeaturedWorks from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RecentPostBox from "@/components/RecentPostBox";

const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <Navbar />
            <HeroSection />
            <RecentPostBox />
            <FeaturedWorks />
            <Footer />
        </div>
    )
}

export default App;