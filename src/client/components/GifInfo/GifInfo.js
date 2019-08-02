import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GifInfo.css';

export default class GifInfo extends Component {
    render() {
        const gif = this.props.gif;
        let author;
        if (gif.username) {
            author = <>
                        <p className='gifAuthor'>{gif.username}</p>
                        <img className='authorAvatar' alt='author avatar' src={gif.user.avatar_url}/>
                    </>
        }
        return(
            <>
                <div className='one-gif'>
                    <Link to={`/search${this.props.location.search}`} style={{ textDecoration: 'none' }}>
                        <div className='button'>Return</div>
                    </Link>
                    <img src={gif.images.original.url} alt={gif.slug}/>
                    <p className='gifDescription'>{`Title: ${gif.title}; Publication date: + ${gif.import_datetime}`}</p>
                    {author}
                    <div className='gif-info-buttons'>
                        <Link to={`${this.props.location.pathname}/edit`} style={{ textDecoration: 'none' }}>
                            <div className='button button-edit'>Edit</div>
                        </Link>
                        <Link to={`${this.props.location.pathname}/delete`} style={{ textDecoration: 'none' }} >
                            <div className='button'>Delete</div>
                        </Link>
                    </div>
                </div>
            </>
        )
    };
};