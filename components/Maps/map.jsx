import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
    return (
        <Map
            google={props.google}
            zoom={props.zoom}
            initialCenter={props.initialCenter}
            center={props.center}
            fullscreenControl={false}
            scrollwheel={false}
            streetViewControl={false}
            minZoom={10}
            maxZoom={18}
            //mapTypeControl: false,
            //mapTypeId: google.maps.MapTypeId.SATELLITE,
            style={{
                width: '100%',
                height: '100%'
            }}
            containerStyle={{
                width: '98%',
                height: '95%'
            }}
        >
            {props.children}
        </Map >
    );
}

export default GoogleApiWrapper({
    apiKey: (process.env.apiKeyMaps)
})(MapContainer)