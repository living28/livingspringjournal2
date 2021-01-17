import Grid from '@material-ui/core/Grid';
import Dropzone from 'react-dropzone';
import React, { useRef } from 'react';
import mstyles from '../styles/uploadCredentials.module.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {API_URL} from '../utils/constants'
import { Paper } from '@material-ui/core';
import { useRouter } from 'next/router'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function FileUpload(){
  const router = useRouter()
  const [file, setFile] = React.useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = React.useState(''); // state for storing previewImage
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = React.useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area 
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const onDrop = (files) => {
  const [uploadedFile] = files;
    setFile(uploadedFile);  const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };
  
  const handleOnSubmit = async (event) => {
    event.preventDefault(); 
    try {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', localStorage.getItem('id'));
        setErrorMsg('');
        const result = await axios.put(`${API_URL}/fileupload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        result? setState({ ...state, open: true }): null
      } else {
        setErrorMsg('Please select a file to add.');
      }
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    const handleClose = () => {
      setState({ ...state, open: false });
      router.push('/admin')
    };
    const { vertical, horizontal, open } = state;
    return<> 
        <form encType='encType="multipart/form-data"' style={{margin:30}} onSubmit={handleOnSubmit}>               
            <Grid container direction="column" justify="space-evenly" alignItems="center" style={{marginTop:20}}>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} 
              autoHideDuration={4000} onClose={handleClose} key={vertical + horizontal}>
                  <Alert severity="success">
                  <b> Saved successfully. Continueing to new entry</b>
                  </Alert>
            </Snackbar>
                  <Paper style={{padding:20}}>
                <div>
              <Dropzone onDrop={onDrop} onDragEnter={() => updateBorder('over')}
                onDragLeave={() => updateBorder('leave')}> 
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                    <input {...getInputProps()} />
                    <h2 className={mstyles.dropZone}><b>Drag and drop a file OR click here to select a file</b></h2>
                    {file && (
                      <div>
                        <strong>Selected file:</strong>
                        {file.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div className={mstyles.imagePreview}>
                    <img className={mstyles.previewImage} src={previewSrc} alt="Preview" />
                  </div>
                ) : (
                  <div className={mstyles.previewMessage}>
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <div className={mstyles.previewMessage}>
                  <p></p>
                </div>
              )}
          </div>
        <Grid item container >
          <Button variant="outlined" color="primary" type="submit">
            Save
        </Button>
        </Grid>
        </Paper>
      </Grid>
    </form>
    </>
} 