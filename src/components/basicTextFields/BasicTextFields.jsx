import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './BasicTextFields.scss';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
export const BasicTextFields = () => {
  const [number, SetNumber] = React.useState('');

  const handleSubmit = (number) => {
    if (number) {
      if(number.length <= 13) {
        SetNumber('+' + number.replace(/[^0-9]/gui, ''));
      }
    } else {
      SetNumber('')
    }
  }

  return (
    <div className='box0'>
      <Box
        // component="form"
        sx={ {
          '& > :not(style)': { m: 1 },
        } }
        noValidate
        autoComplete="off"
        className='box1'
      >
        <TextField
          error={number.length !== 1 && number.length !== 13 && number.length !== 0}
          id="outlined-basic"
          variant="outlined"
          sx={ { backgroundColor: 'white', borderRadius: 1 } }
          placeholder='+ xxx xxx xxx'
          value={ number }
          onChange={ (event) => handleSubmit(event.target.value) }
          onClick={ () => handleSubmit('+') }
        />
      </Box>
    </div>
  );
};
