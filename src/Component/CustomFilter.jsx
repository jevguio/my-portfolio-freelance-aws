import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'; 

export default function ControllableStates({options,label,selectedValue,onChange,fullWidth}) { 

  return ( 
      <Autocomplete
      fullWidth={fullWidth}
      style={{width:'100%',position:'relative',display:'block'}}
        value={selectedValue}
        onChange={(event, newValue) => {
            onChange(newValue);
        }}
        inputValue={selectedValue}
        onInputChange={(event, newInputValue) => {
            onChange(newInputValue);
        }}
        id={label+"-controllable-states"}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      /> 
  );
}
