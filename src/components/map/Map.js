import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                <br></br>
                {/* <div style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        // bootstrapURLKeys={{ key: NEED KEY HERE }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lng={97.743838}
                            lat={30.265958}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div> */}
                <h5>Each listing has been verified by a professional assessor.</h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>Slider Placeholder</div>
            </div>
        );
    }
}

export default Map;