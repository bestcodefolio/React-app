import React, {Component} from 'react';
import EditForm from '../../components/EditForm/EditForm.js';
import UploadeForm from '../../components/UploadeForm/UploadeForm.js';
import { Redirect } from 'react-router-dom';
import { uploadDocumentRequest } from  '../../redux/actions/uploadfile.js';

export default class AddFile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUploaded: false,
            thumb: ``,
            redirect: null
        }
    };
    handleChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (file => event => {
            this.setState({
                name: file.name,
                file: file,
                thumb: event.target.result,
                isUploaded: true
            });
        })(file);
        reader.readAsDataURL(file);
    }
    handleClick = () => {
        this.props.history.goBack();
        this.setState({ redirect: <Redirect to='/' /> })
    }
    uploadFile(file, dispatch) {
        dispatch(uploadDocumentRequest(file));
    }
    render() {
        return(
            <>
                {!this.state.isUploaded &&
                    <UploadeForm 
                        onChange={event => this.handleChange(event)}
                        onClick={this.handleClick}
                    />
                }
                {this.state.redirect}
                {this.state.isUploaded &&
                    <EditForm {...this.props}
                        gif={{ username: 'user3000', title: this.state.name, src: this.state.thumb, file: this.state.file }}
                        path={`/search?q=${this.props.selectedQuery}&l=${this.props.gifs.length}`}
                        onUpload={this.uploadFile}
                    />
                }
            </>
        )
    }
};
