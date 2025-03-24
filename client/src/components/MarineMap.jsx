import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/marker.svg';

export default function MarineMap() {
    const [center, setCenter] = useState([20, 0]);

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
        <div className='relative w-full h-full'>
            {/* Chincheta centrada */}
            <div className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-[999]'>
                <img src={markerIcon} alt='marker' className='w-6 h-6' />
            </div>

            {/* Mapa debajo */}
            <MapContainer
                center={center}
                zoom={3}
                minZoom={2}
                maxZoom={4}
                worldCopyJump={true}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='© OpenStreetMap contributors'
                />
                <MapEvents />
            </MapContainer>
        </div>
    );
}
