import Header from './pages/Header';
import MarineMap from './components/MarineMap';
import Footer from './pages/Footer';
import Button from './components/ui/Button';
import CardInfo from './components/ui/CardInfo';
import OverlayPanel from './components/ui/OverlayPanel';
export default function App() {
    const dummyData = [
        { title: 'Altura de ola', value: 2.3, unit: 'm' },
        { title: 'Viento', value: 14, unit: 'km/h' },
        { title: 'Temperatura', value: 18.7, unit: '°C' },
    ];
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Button variant='primary'>Ver pronóstico</Button>
            <Button variant='secondary'>Opciones</Button>
            <Button variant='alert'>Cancelar</Button>
            <OverlayPanel data={dummyData} />
            <MarineMap />
            <Footer />
        </div>
    );
}
