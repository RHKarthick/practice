import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards(props) {
    const {image,title,description} = props;
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:"lightgrey" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{height:"50px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis" }} >
            {title}
          </Typography>
          <Typography variant="body2" 
          sx={{ color: 'text.secondary',height:"100px",overflow:"hidden",textOverflow:"ellipsis"  }}
          >
           {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
