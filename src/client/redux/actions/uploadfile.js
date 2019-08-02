export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAILED = 'UPLOAD_DOCUMENT_FAILED';

export function uploadSuccess({ data }) {
    return {
        type: UPLOAD_DOCUMENT_SUCCESS,
        data,
    };
}

export function uploadFail(error) {
    return {
        type: UPLOAD_DOCUMENT_FAILED,
        error,
    };
}

export const uploadDocumentRequest = file => async dispatch => {  
    console.log('uploade');
    const data = new FormData();
    data.append('file', file);
    const response = fetch('/files', { 
                        method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body: data 
                    });
    return response.then(res => dispatch(uploadSuccess(res)))
                    .catch(err => dispatch(uploadFail(err)));
};