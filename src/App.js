import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import FeactureSection from './components/FeatureSections';
import TeamSection from './components/TeamSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
const App = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-grow flex-col">
                <HeroSection />
                <FeactureSection />
                <StatsSection />
                <TeamSection />
            </div>
            <Footer />
        </>
    );
};

export default App;
