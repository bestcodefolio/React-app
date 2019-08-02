import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './EditForm.css';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '', 
            title: '',
            authorIsValid: 'valid',
            titleIsValid: 'valid',
            redirect: undefined
        };
    }
    validate = value => value.length ? 'valid' : 'inValid';
    onTitleChange = e => {
        const value = e.target.value;
        this.setState({ title: value, titleIsValid: this.validate(value) });
    }
    onAuthorChange = e => {
        const value = e.target.value;
        this.setState({ author: value, authorIsValid: this.validate(value) });
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.titleIsValid === 'valid') {
            if (this.props.gif.file) {
                this.props.onUpload(this.props.gif.file, this.props.dispatch);
            }
            const path = this.props.path ? this.props.path : '/';
            this.setState({ redirect: <Redirect to={`${path}`} /> });
        }        
    }
    getTitle = () => {
        if (this.state.title === '' && this.state.titleIsValid === 'valid') {
            if (this.props.gif) {
                return this.props.gif.title.replace('.', ' ');
            }
        }
        return this.state.title;
    }
    getAuthor = () => {
        if (this.state.author === ''  && this.state.authorIsValid === 'valid') {
            if (this.props.gif) {
                if (this.props.gif.username) {
                    return this.props.gif.username;
                }
            }
        }
        return this.state.author;
    }
    render() {
        let src;
        if (this.props.gif.src) {
            src = this.props.gif.src;
        } else {
            if (this.props.gif.images) {
                src = this.props.gif.images.fixed_width.url;
            }
        }
        const gif = <img src={src} className='gif-edit' alt='gif'/>;
        const titleColor = this.state.titleIsValid === 'valid' ? '#e8eeef' : 'red';
        return(
            <div className='edit-form'>
                <form onSubmit={this.handleSubmit}>
                    {gif}
                    <div>
                        <span className="number">1</span> 
                        New Gif Info 
                    </div>
                    <input type='title'  placeholder='Gif Title *'
                        value={ this.getTitle() } 
                        onChange={this.onTitleChange}  
                        style={{ borderColor: titleColor }}
                    />
                    <textarea placeholder='About gif'></textarea>
                    <div>
                        <span className='number'>2</span> 
                        Author 
                    </div>
                    <textarea placeholder='Link to your profile' value={this.getAuthor()} onChange={this.onAuthorChange} />
                    <input type='submit'/>
                    {this.state.redirect}
                </form>
            </div>
        )
    }
};
