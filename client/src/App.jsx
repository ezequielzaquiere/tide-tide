import Header from './pages/Header';
import MarineMap from './components/MarineMap';
import Footer from './pages/Footer';

export default function App() {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <MarineMap />
            <Footer />
        </div>
    );
}
