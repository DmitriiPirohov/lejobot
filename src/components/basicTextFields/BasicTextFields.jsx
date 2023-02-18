import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './BasicTextFields.scss';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
export const BasicTextFields = () => {
  return (
    <div className='box0'>
      <Box
        // component="form"

        sx={ {
          '& > :not(style)': { m: 1 },
        } }
        noValidate
        autoComplete="off"
      >
        <TextField className='box1' id="outlined-basic" variant="outlined" sx={ { backgroundColor: 'white', borderRadius: 2 } } placeholder='+ xxx xxx xxx' />
      </Box>
    </div>
  );
};
