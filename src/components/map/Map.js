import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 30.2892, lng: -97.7431
        },
        zoom: 11
    };

    render() {
        return (
            <div id="flexmap" >
                <div style={{ height: '80vh', width: '90%' }}>
                    <GoogleMapReact
                        // bootstrapURLKeys={{ key: NEED KEY HERE }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={97.743838}
                            lng={30.265958}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default Map;