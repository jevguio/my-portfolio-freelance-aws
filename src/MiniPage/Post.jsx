import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Alert, Box, Button, ImageList, ImageListItem, LinearProgress, TextField, Typography } from '@mui/material';
import CustomFilter from '../Component/CustomFilter';

const category_options = ['Video Edit', 'Animation', 'Website Development'];

const Posts = ({ posts, SetItemList }) => {
    const [selectedCategory, setSelectedCategory] = useState('Video Edit');
    const [isSuccess, setIsSuccess] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState(null);
    const [newPost, setNewPost] = useState({
        title: '',
        category: 'Video Edit',
        description: '',
        video_url: '',
        date: '',
        image: []
    });

    const handleCategoryFilterChange = (event, newValue) => {
        if (newValue == null) newValue = "All";
        setSelectedCategory(newValue);
        setNewPost((prev) => ({ ...prev, category: newValue }));
    };

    const handleChange = (e) => {
        setNewPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        // Append all the fields to the FormData object
        formData.append('title', newPost.title);
        formData.append('category', newPost.category);
        formData.append('description', newPost.description);
        formData.append('video_url', newPost.video_url);
        formData.append('date', newPost.date);
    
        // Append each image file to the FormData object
        newPost.image.forEach((file) => {
            formData.append('image[]', file); // use 'image[]' to treat it as an array in Laravel
        });
    
        axios.post('/api/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file uploads
            },
        })
        .then(response => {
            SetItemList([...posts, response.data]);
            setNewPost({
                title: '',
                category: '',
                description: '',
                video_url: '',
                date: '',
                image: []
            });
        })
        .catch(error => {
            console.error('There was an error uploading the post!', error);
        });
    };
    

    // Drag-and-Drop Image handling
    const onDrop = (acceptedFiles) => {
        const updatedImages = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );
        setNewPost((prev) => ({
            ...prev,
            image: [...prev.image, ...updatedImages] // Store the file objects
        }));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/png, image/jpeg' });

    return (
        <Box sx={{ px: 5, py: 0.6, width: '70%', m: 'auto', mt: 5, boxShadow: '0 0 10px 0px black' }}>
            <Typography variant='h4' fontWeight={'bold'} align='center' padding={0} margin={3}>POST</Typography>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flex: 'nowrap' }}>
                    {/* ImageList and Drag & Drop Section */}
                    <Box
                        {...getRootProps({ className: 'dropzone' })}
                        style={{
                            padding: '10px',
                            maxHeight: '450px',
                            width: '50%',
                            boxShadow: '0 0 2px 0 black',
                            marginRight: 15,
                            border: '2px dashed gray',
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                    >
                        <input {...getInputProps()} accept='image/png, image/jpeg' />
                        <Typography variant="body1">Drag & drop images here, or click to select files</Typography>
                        <ImageList sx={{ width: "100%", height: '100%', overflow: 'scroll', maxHeight: '360px' }} cols={3}>
                            {newPost.image.map((item, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={item.preview}
                                        alt={`image-${index}`}
                                        style={{ width: '100%', height: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                    {/* Form Fields */}
                    <Box sx={{ width: '50%' }}>
                        <Box sx={{ mb: 1.5, ml: 1 }}>
                            <TextField
                                name="title"
                                label="Title"
                                value={newPost.title}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Box>

                        <CustomFilter
                            options={category_options}
                            name="category"
                            label="Category"
                            value={selectedCategory}
                            inputValue={selectedCategory}
                            onChange={handleCategoryFilterChange}
                        />
                        <Box sx={{ mb: 1.5, ml: 1 }}>
                            <TextField
                                name="description"
                                label="Description"
                                value={newPost.description}
                                onChange={handleChange}
                                variant="outlined"
                                multiline
                                rows={3}
                                fullWidth
                                required
                            />
                        </Box>
                        <Box sx={{ mb: 1.5, ml: 1 }}>
                            <TextField
                                name="video_url"
                                label="Video URL"
                                value={newPost.video_url}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box sx={{ mb: 1.5, ml: 1 }}>
                            <TextField
                                name="date"
                                label="Date"
                                type="date"
                                value={newPost.date}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                required
                            />
                        </Box>
                        <Button type="submit" variant="contained" color="primary" disabled={isProcessing}>
                            {isProcessing ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Box>
                </Box>
            </form>

            {/* Post Display Section */}
            <Box sx={{ mt: 4 }}>
                {isProcessing && <LinearProgress />}
                {result && (
                    <Alert severity={isSuccess ? "success" : "error"}>{result}</Alert>
                )}
            </Box>
        </Box>
    );
};

export default Posts;
