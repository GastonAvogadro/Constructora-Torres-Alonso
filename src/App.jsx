import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { ApiContext } from './context/ApiContext';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
    return (
        <>
            <NavBar />
            <ScrollToTop />
            <ApiContext>
                <AnimatedRoutes />
            </ApiContext>
            <Footer />
        </>
    );
}

export default App;
