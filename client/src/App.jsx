import MarineMap from './components/MarineMap';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
    return (
        <div className='flex flex-col h-screen'>
            <Header />

            <main className='flex-grow relative'>
                <div className='absolute inset-0'>
                    <MarineMap />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
