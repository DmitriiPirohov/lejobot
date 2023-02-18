import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './MultilineTextFields.scss'

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
export const MultilineTextFields = () => {
  return (
    <Box
      component="form"
      sx={ {
        '& .MuiTextField-root': { m: 0},
      } }
      noValidate
      autoComplete="off"
      className='multiline-box'
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          className='multiline-item'
          label=""
          multiline
          rows={ 4 }
          defaultValue=""
          sx={ { backgroundColor: 'white', borderRadius: 2 } } />
      </div>
    </Box>
  );
};
