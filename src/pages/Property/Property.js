import React, { useState } from 'react'
import PropertyPost from '../../components/PropertyPost/PropertyPost';
import PropertyShow from '../../components/PropertyShow/PropertyShow';
import './Property.css';

function Property() {
    const [renderComponent, setRenderComponent] = useState(false)

    return (
        <div>
            <button onClick={() => setRenderComponent('Show')}>Show</button>
            <button onClick={() => setRenderComponent('Post')}>Post</button>

            { renderComponent === 'Show' ? (
                <PropertyShow />
            ) : (
                <PropertyPost />
            ) }
        </div>
    )
}

export default Property
