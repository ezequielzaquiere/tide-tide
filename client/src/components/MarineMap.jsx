// src/MarineMap.jsx
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix de iconos para que se vean correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

function CenterMarker({ position }) {
    return (
        <Marker position={position}>
            <Popup>
                <strong>
                    {position[0].toFixed(2)}° N / {position[1].toFixed(2)}° W
                </strong>
                <br />
                Aquí podríamos mostrar datos marinos 🌊
            </Popup>
        </Marker>
    );
}

export default function MarineMap() {
    const [center, setCenter] = useState([20, 0]);

    function MapEvents() {
        useMapEvents({
            moveend: (e) => {
                const newCenter = e.target.getCenter();
                setCenter([newCenter.lat, newCenter.lng]);
            },
        });
        return null;
    }

    return (
        <MapContainer
            center={center}
            zoom={3}
            minZoom={2}
            maxZoom={4}
            worldCopyJump={true}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='© OpenStreetMap contributors'
            />
            <MapEvents />
            <CenterMarker position={center} />
        </MapContainer>
    );
}
