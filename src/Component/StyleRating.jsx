import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  }, 
});

export default function CustomizedRating({icon,emptyIcon,label,value,max,defaultValue,precision}) {
  return (
    <Box sx={{ '& > legend': { mx:'auto'} }}>
      <Typography component="legend">{label}</Typography>
      <StyledRating 
        name={label+"_customized-rating"} 
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={precision}
        icon={icon}
        emptyIcon={emptyIcon}
        max={max} 
        value={value} 
        readOnly
      /> 
    </Box>
  );
}
