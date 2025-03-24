// src/components/MarineMap.jsx
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

function MarineMap() {
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
        <MapContainer
            center={center}
            zoom={3}
            minZoom={4}
            worldCopyJump={true}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='© OpenStreetMap contributors'
            />
            <Marker position={center}>
                <Popup>
                    {center[0].toFixed(2)}° N / {center[1].toFixed(2)}° W
                </Popup>
            </Marker>
            <MapEvents />
        </MapContainer>
    );
}

export default MarineMap;
