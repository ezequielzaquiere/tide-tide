import Header from './pages/Header';
import MarineMap from './components/MarineMap';
import Footer from './pages/Footer';
import Button from './components/Button';

export default function App() {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Button variant='primary'>Ver pronóstico</Button>
            <Button variant='secondary'>Opciones</Button>
            <Button variant='alert'>Cancelar</Button>
            <MarineMap />
            <Footer />
        </div>
    );
}
