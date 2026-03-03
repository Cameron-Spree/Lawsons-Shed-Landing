import Variation1 from './pages/Variation1';
import Variation2 from './pages/Variation2';
import Variation3 from './pages/Variation3';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <main>
                {/* Continuous scroll experience */}
                <Variation1 />
                <Variation2 />
                <Variation3 />
                <Footer />
            </main>
        </>
    );
}

export default App;
