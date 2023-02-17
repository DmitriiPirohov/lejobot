import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import './BasicSelect.scss';
import { minWidth } from '@mui/system';


export const BasicSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='box'>
      <Box sx={ { minWidth: 280 } }>
        <FormControl
          fullWidth
        >
          {/* <InputLabel id="demo-simple-select-label">Head</InputLabel> */ }
          <Select
            sx={ { backgroundColor: 'white' } }
            // labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ age }
            // label="Age"
            className="select"
            onChange={ handleChange }
          >
            <MenuItem value={ '' }>None</MenuItem>
            <MenuItem value={ 'Buisnes' }>Buisnes</MenuItem>
            <MenuItem value={ 'Partner' }>Partner</MenuItem>
            <MenuItem value={ 'Job' }>Job</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>

  );
};
