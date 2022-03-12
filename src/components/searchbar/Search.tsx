import {TextField, styled } from '@mui/material'
import React from 'react'

const MyTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'blue',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'blue',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
    background: "#f0f0f042"
  },
});

export default function Search(props:{handleSearch: (e:React.ChangeEvent<HTMLInputElement>) =>void}) {    
return(
  <MyTextField sx={{marginBottom: '48px', maxWidth:'200px', marginLeft:'auto', marginRight:'auto'}} 
  onChange={props.handleSearch} label="Search robo name" variant="outlined" 
  color="success"/>
  )
}
