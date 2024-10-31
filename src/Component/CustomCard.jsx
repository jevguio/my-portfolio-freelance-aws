import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import ReactPlayer from 'react-player';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Chip, Divider, Grid2, Pagination, Skeleton, useMediaQuery } from '@mui/material';
import ShareButtons from './ShareSocialMedia';
export default function MultiActionAreaCard({ imageUrl, videoUrl, title, Description, category, timer }) {
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [url, setUrl] = React.useState('');
    const handleOpen = () => {

        setOpen(loading ? false : true);
    }
    const handleClose = () => setOpen(false);
    const convertToEmbed = (url) => {
        const videoId = url.split('v=')[1]; // Extract video ID 
        return `https://www.youtube.com/embed/${videoId}`;
    };
    const [loading, Setloading] = React.useState(true);

    React.useEffect(() => {

        const getLoad = () => {
            
            // console.log('imageUrl',imageUrl);
            // console.log('videoUrl',videoUrl);
            // console.log('title',title);
            // console.log('Description',Description);
            // console.log('category',category);
            // console.log('timer',timer);
            if ((imageUrl != '' || videoUrl != '') && title != '' && Description != '' && category != '' && timer)
                setTimeout(() => {

                    Setloading(false);
                }, (timer * 1000));
        }
        getLoad();
    }, [imageUrl, videoUrl, title, Description, category, timer])

    React.useEffect(() => {
        if (!loading) {

            const img =  imageUrl[page - 1];
            // console.log(img);
            setUrl(img);
        }
    }, [page, imageUrl,loading]);


    const matches = useMediaQuery('(max-width:900px)');
    const handleChange = (e, value) => {

        setPage(value);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    display: matches ? 'block' : 'flex',
                    flex: 'wrap',
                    transform: 'translate(-50%, -50%)',
                    width: matches ? '90%' : '74%',
                    height: '80%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    pb: videoUrl ? 0 : imageUrl.length > 1 ? 5 : 0,
                }}>

                    <Box width={'100%'} height={'auto'} sx={{
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                        {videoUrl ?
                            <ReactPlayer
                                controls
                                height={matches ? '70vw' : '100%'}
                                width={'100%'}
                                style={{ aspectRatio: 'auto' }}
                                url={convertToEmbed(videoUrl)}

                                onError={(e) => console.error('Error loading video:', e)}
                            >
                            </ReactPlayer> : <>

                                <Box
                                    component={'img'}
                                    src={url}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                    }} >

                                </Box>
                                {imageUrl.length > 1 && <Pagination
                                    sx={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        width: '100%', m: 'auto'
                                    }}
                                    count={imageUrl.length} // Total pages based on filtered items
                                    page={page}
                                    onChange={handleChange}
                                />}

                            </>
                        }
                    </Box>

                    <Box  >

                        <Card sx={{ maxWidth: 345, height: '100%' }} >
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {Description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ width: 'full' }}>


                                {loading ? (
                                    <React.Fragment>
                                        <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                                        <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                                        <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                                        <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                                        <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                                    </React.Fragment>
                                ) : (
                                    <Box sx={{ width: '90%', mx: 'auto' }}>
                                        <ShareButtons title={title} description={Description}></ShareButtons>
                                    </Box>
                                )}
                            </CardActions>
                        </Card>
                    </Box>

                </Box>
            </Modal>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea onClick={handleOpen}>

                    {loading ? (
                        <Skeleton sx={{ height: 140, width: 345 }} animation="wave" variant="rectangular" />
                    ) : (
                        <CardMedia
                            component="img"
                            height="140"
                            image={url}
                            alt={title}
                        />
                    )
                    }
                    <CardContent sx={{
                        minHeight:'13em'
                    }}>

                        {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            </React.Fragment>
                        ) : (
                            <Chip label={category}
                                color={
                                    category == "Video Edit"||category == "GDSC Event" ? 'primary' :
                                    category == "Animation"||category == "3D Modeling" ? 'success' :
                                    category == "Web Development" || category == "Sideline Project" ? 'warning' :
                                                category == "Photos" ? 'error' : ''
                                }
                                onClick={() => { }}
                                sx={{ mt: -12 }}
                            />
                        )}

                        {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            </React.Fragment>
                        ) : (
                            <Typography gutterBottom variant="h5" component="div" 
                            sx={{
                                color: 'text.secondary',
                                display: '-webkit-box',
                                WebkitLineClamp: 2, // Limit to 3 lines
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {title}
                            </Typography>
                        )} 
                        {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </React.Fragment>
                        ) : (
                            <>

                                <Typography variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3, // Limit to 3 lines
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis', 
                                    }}>
                                    {Description}
                                </Typography>
                                <Typography variant='body2'

                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: "bold"
                                    }}
                                >
                                    View More
                                </Typography>
                            </>
                        )}
                    </CardContent>
                </CardActionArea>
                <Divider>

                </Divider>
                <CardActions sx={{ width: 'full', minHeight:'3em'}}>


                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                            <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                            <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                            <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                            <Skeleton animation="wave" variant="rounded" height={30} width={'20%'} />
                        </React.Fragment>
                    ) : (
                        <Box sx={{ width: '90%', mx: 'auto' }}>
                            <ShareButtons title={title} description={Description}></ShareButtons>
                        </Box>
                    )}
                </CardActions>
            </Card>

        </>

    );
}
