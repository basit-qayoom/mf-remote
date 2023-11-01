import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ children, onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default MyButton;
