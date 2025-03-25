import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/timon.svg'; // reemplazá si es necesario
import { fetchMarineData } from '../services/openmeteo';
import OverlayPanel from './ui/OverlayPanel';

export default function MarineMap() {
    const [center, setCenter] = useState([20, 0]);
    const [marineData, setMarineData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchMarineData(center[0], center[1]);
            setMarineData([
                {
                    title: 'Altura de ola',
                    value: data.waveHeight?.toFixed(1),
                    unit: 'm',
                },
                {
                    title: 'Viento',
                    value: data.windSpeed?.toFixed(1),
                    unit: 'km/h',
                },
                {
                    title: 'Temperatura del agua',
                    value: data.waterTemperature?.toFixed(1),
                    unit: '°C',
                },
            ]);
        };

        loadData();
    }, [center]);
    function MapEvents() {
        useMapEvents({
            moveend: (e) => {
                const c = e.target.getCenter();
                setCenter([c.lat, c.lng]);
            },
        });
        return null;
    }

    return (
        <div className='relative w-full h-full flex-grow'>
            {/* Chincheta centrada y por encima del mapa */}
            <div className='pointer-events-none absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-full'>
                <img src={markerIcon} alt='marker' className='w-6 h-6' />
            </div>

            {/* Mapa (no uses zIndex alto aquí) */}
            <MapContainer
                center={center}
                zoom={3}
                minZoom={2}
                worldCopyJump={true}
                className='h-full w-full z-0'
                maxBounds={[
                    [-185, -280], // sudoeste (latitud mínima, longitud mínima)
                    [185, 280], // noreste (latitud máxima, longitud máxima)
                ]}
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='© OpenStreetMap contributors'
                />
                <MapEvents />
            </MapContainer>
            {marineData && <OverlayPanel data={marineData} />}
        </div>
    );
}
