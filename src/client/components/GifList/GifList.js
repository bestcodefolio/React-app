import React, {Component} from 'react';
import GifItem from '../GifItem/GifItem.js';

export default class GifList extends Component {
    handleClick = e => {
        this.props.onClick(e);
    }
    render() {
        return (
            <div className='gifs'>
                {this.props.gifs.map((gif) => <GifItem gif={gif} key={gif.id}/>)}
                {this.props.gifs.length && <i onClick={e => this.handleClick(e)} className='fa fa-refresh'/>}
            </div>
        )
    };
};