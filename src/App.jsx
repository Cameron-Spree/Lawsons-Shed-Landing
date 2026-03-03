import { useState } from 'react';
import Navigation from './components/Navigation';
import Variation1 from './pages/Variation1';
import Variation2 from './pages/Variation2';
import Variation3 from './pages/Variation3';

function App() {
    const [activeTab, setActiveTab] = useState('variation1');

    return (
        <>
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            <main>
                {activeTab === 'variation1' && <Variation1 />}
                {activeTab === 'variation2' && <Variation2 />}
                {activeTab === 'variation3' && <Variation3 />}
            </main>
        </>
    );
}

export default App;
