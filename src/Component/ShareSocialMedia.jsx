
import { Grid2, IconButton, Tooltip } from '@mui/material';
import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
const createShareLink = (platform, url, title, description) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    let link = '';
    switch (platform) {
        case 'facebook':
            link = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'X':
            link = `https://X.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
            break;
        case 'linkedin':
            link = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        case 'whatsapp':
            link = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
            break;
        case 'pinterest':
            link = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDescription}`;
            break;
        default:
            link = '';
            break;
    }
    window.open(link,'_blank');
};
const listShareSocial = [
    {
        tooltip: 'Share on Facebook',
        title: 'facebook',
        component: <FacebookIcon />
    },
    {
        tooltip: 'Share on X',
        title: 'X',
        component: <XIcon />
    },
    {
        tooltip: 'Share on LinkedIn',
        title: 'linkedin',
        component: <LinkedInIcon />
    },
    {
        tooltip: 'Share on WhatsApp',
        title: 'whatsapp',
        component: <WhatsAppIcon />
    },
    {
        tooltip: 'Share on Pinterest',
        title: 'pinterest',
        component: <PinterestIcon />
    },
]
const ShareButtons = ({title,description}) => {
    const url = window.location.href; // The URL you want to share 
    return (
        <Grid2 container spacing={0} width={'100%'}>
            {listShareSocial.map((share, index) => (
                <Grid2 key={index} size={2.4}>
                    <Tooltip title={share.tooltip}>
                        <IconButton 
                        color={
                            share.title == 'facebook' ? 'primary' :
                                share.title == 'X' ? 'rgb(0,0,0)' :
                                    share.title == 'linkedin' ? 'primary' :
                                        share.title == 'whatsapp' ? 'success' :
                                            share.title == 'pinterest' ? 'error' :
                                                ''
                                            }
                        sx={{
                            color: 
                                share.title == 'X' ? 'rgb(0,0,0)' : 
                                                ''
                        }
                        } onClick={() => createShareLink(share.title, url, title, description)}>
                            {share.component}
                        </IconButton>
                    </Tooltip>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default ShareButtons;
