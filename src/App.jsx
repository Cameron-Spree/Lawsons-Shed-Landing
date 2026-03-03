import Variation1 from './pages/Variation1';
import Variation2 from './pages/Variation2';
import Variation3 from './pages/Variation3';
import ModelViewer from './components/ModelViewer';
import Footer from './components/Footer';
import ThemeCustomizer from './components/ThemeCustomizer';

function App() {
    return (
        <>
            <ThemeCustomizer />
            <main>
                {/* Continuous scroll experience */}
                <Variation1 />
                <Variation2 />
                <Variation3 />
                <ModelViewer />
                <Footer />
            </main>
        </>
    );
}

export default App;
