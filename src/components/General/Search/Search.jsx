import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={People.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              
            }}
          />
        )}
      />
    </Stack>
  );
}
// People in NULP
const People = [
  { title: 'Zelisko M', year: 1 },
  { title: 'Ptushkin D', year: 2 },
  { title: 'Masliak S', year: 1 },
  { title: 'Zadorozhna D', year: 3 },
  { title: 'Romanyuk S', year: 1 },
  { title: "Kalatalyuk O", year: 2 },
  { title: 'Karlytskiy P', year: 4 },
];