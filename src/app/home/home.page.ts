import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    var markerIcon = L.icon({
      // iconUrl: '../../assets/icon/favicon.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    var littleton = L.marker([39.61, -105.02], { icon: markerIcon }).bindPopup(
      'This is Littleton, CO.'
    );
    var denver = L.marker([39.74, -104.99], { icon: markerIcon }).bindPopup(
      'This is Denver, CO.'
    );
    var aurora = L.marker([39.73, -104.8], { icon: markerIcon }).bindPopup(
      'This is Aurora, CO.'
    );
    var golden = L.marker([39.77, -105.23], { icon: markerIcon }).bindPopup(
      'This is Golden, CO.'
    );

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var Esri_WorldStreetMap = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
      }
    );
    var Esri_WorldTopoMap = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
      }
    );
    var Esri_WorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      }
    );
    var Esri_WorldGrayCanvas = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
      }
    );
    var Esri_OceanBasemap = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
        maxZoom: 13,
      }
    );

    var map = L.map('mapId', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [Esri_WorldStreetMap, cities],
    });

    var baseMaps = {
      Default: Esri_WorldGrayCanvas,
      Street: Esri_WorldStreetMap,
      Satellite: Esri_WorldImagery,
      Terrain: Esri_WorldTopoMap,
      Ocean: Esri_OceanBasemap,
    };

    var overlayMaps = {
      Cities: cities,
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  }
}
