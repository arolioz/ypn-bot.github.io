import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import { FaSpinner } from 'react-icons/fa';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const App = () => {
    return (
        <>
            <Suspense fallback={<FaSpinner className="animate-spin" />}>
                <div className="flex flex-col flex-grow">
                    <Navbar />
                    <Router>
                        <Home path="/" />
                    </Router>
                </div>
                <Footer />
            </Suspense>
        </>
    );
};

export default App;
