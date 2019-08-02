import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './GifItem.css';

export default class GifItem extends Component {
    render() {
        return (
            <Link to={`gif/${this.props.gif.id}${window.location.search}`}>
                <img  className='gif is-loading' 
                    src={this.props.gif.images.fixed_width.url} 
                    alt={this.props.gif.images.fixed_width.slug}
                />
            </Link> 
        );
    };
};;