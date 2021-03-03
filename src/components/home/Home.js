import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
    static defaultProps = {
        center: {
            lat: 30.2892, lng: -97.7431
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
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
        );
    }
}

export default Home;