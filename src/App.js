import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import Home from './Pages/Home';
const App = () => {
    return (
        <>
            <div className="flex flex-grow flex-col">
                <Navbar />
                <Router>
                    <Home path="/" />
                </Router>
            </div>
            <Footer />
        </>
    );
};

export default App;
