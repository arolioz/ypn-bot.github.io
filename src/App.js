import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';
const Home = lazy(() => import('./pages/Home'));
const App = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
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
