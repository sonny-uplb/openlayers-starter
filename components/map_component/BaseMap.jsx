'use client'

import { useEffect, useRef, useState } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from "ol/proj";
import 'ol/ol.css';

const BaseMap = (props, {children}) => {
    const { center, zoom } = props;
    const mapElement = useRef();

    const baseLayer = new TileLayer (
        { source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            crossOrigin: 'anonymous',
        })
    });

    useEffect(() => {
        new Map({
          target: mapElement.current,
          layers: [
            baseLayer
          ],
          view: new View({
            center: fromLonLat(center),
            zoom: (zoom)
          })
        });

      }, []);
    
      return (
        <div id="map" ref={mapElement}> {children} </div>
      )
      
}
export default BaseMap;