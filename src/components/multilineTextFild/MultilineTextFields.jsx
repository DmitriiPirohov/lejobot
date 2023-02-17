import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
export const MultilineTextFields = () => {
  return (
    <Box
      component="form"
      sx={ {
        '& .MuiTextField-root': { m: 0, width: '27ch' },
      } }
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={ 4 }
          defaultValue=""
          sx={ { backgroundColor: 'white', borderRadius: 2 } } />
      </div>
    </Box>
  );
};
