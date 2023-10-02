'use client'

import dynamic from "next/dynamic"

const MapBase = dynamic(
    async() => await import ('./BaseMap'),
    {
        loading: () => <p>Loading Map...</p>,
        ssr: false
    }
)

function DynamicMap() {
    const center = [120.9842, 14.5995];
    const zoom = 7;

    return (
        <MapBase center={center} zoom={zoom}></MapBase>
    )
}


export default DynamicMap;