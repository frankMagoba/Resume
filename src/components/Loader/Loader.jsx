import React, { Component } from 'react';
import './Loader.css';

export class Loader extends Component {
    render() {
        return (
            <div id="loading-spinner">
                <div class="spin-icon"></div>
                <div className="text-center mx-auto my-auto">Loading</div>
            </div>

        )
    }
}

export default Loader
