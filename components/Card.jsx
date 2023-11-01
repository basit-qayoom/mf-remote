import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MyCard = ({ children, title, content }) => {
  return (
    <Card elevation={10}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
        {/* Rendering card children */}
        <div>
            {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCard;
