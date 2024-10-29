// src/components/UploadForm.jsx
import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Alert } from '@mui/material';
import CustomFilter from '../Component/CustomFilter';

const category_options = ['Video Edit', 'Animation', 'Website Development', 'Photos'];
const UploadForm = ({fetchPost}) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Video Edit');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [date, setDate] = useState('');
    const [images, setImages] = useState([]);

    const [success, issuccess] = useState(null);
    const [result, setresult] = useState(false);
    const [resultMSG, setresultMSG] = useState('');
    const handleImageChange = (event) => {
        setImages(event.target.files); // Get the file list
    };

    const today = new Date();
    const formattedToday = today.toISOString().split('.')[0]; 
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('videoUrl', videoUrl);
        formData.append('date', date);

        // Append all selected images to the FormData
        for (let i = 0; i < images.length; i++) {
            formData.append('imageUrl[]', images[i]);
        }
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send the form data to the server
        try {
            const response = await fetch('/posts', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': csrfToken, // Include CSRF token here
                },
                body: formData,
            });
            const data = await response.json();
            // console.log(data);
            if (response.status == 201) {
                issuccess(true);
                setresultMSG('Upload Successfully');
                fetchPost();
            } else {

                issuccess(false);
                setresultMSG(data.message);
            }

            // Handle success (e.g., reset the form, show a success message)
        } catch (error) {
            console.error('Error uploading post:', error);
            issuccess(false);
            setresultMSG(error);
            // Handle error (e.g., show an error message)
        }
        setresult(true);
    };

    return (
        <Paper elevation={3} style={{ padding: 20 }} sx={{ mt: 5, width: '30%', mx: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Upload Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            fullWidth
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomFilter
                            label="Category"
                            fullWidth
                            options={category_options}
                            required
                            selectedValue={category}
                            onChange={setCategory}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Video URL"
                            fullWidth
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="datetime-local"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            inputProps={{
                                max: formattedToday , 
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            multiple
                            accept="image/png,image/jpg,image/jpeg"
                            onChange={handleImageChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Upload
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {result &&
                            <Alert variant='outlined' color={success == true ? 'success' : 'error'}>
                                {resultMSG}
                            </Alert>
                        }
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default UploadForm;
