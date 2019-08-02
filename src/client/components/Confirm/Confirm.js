import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import './Confirm.css';

export default class Confirm extends Component {
    render() {
        return(
            <Dialog className='delete-gif-modal'>
                <div className='confirmaton-form'>
                    <h1 className='gif-delete-headline'>DELETE GIF</h1>
                    <img className='delete-gif' src={this.props.gif.images.original.url} alt={this.props.gif.slug}/>   
                    <p>Are you sure?</p>
                    <div className='confirm-buttons'>
                        <Link to={`/search?q=${this.props.path}`} style={{ textDecoration: 'none' }} >
                            <button className='button-danger buttons'>OK</button>
                        </Link>
                        <Link to={`/gif/${this.props.match.params.id}?q=${this.props.path}`} style={{ textDecoration: 'none' }} >
                            <button className='button-default buttons'>Cancel</button>
                        </Link>
                    </div>
                </div>
            </Dialog>
        )
    }
}