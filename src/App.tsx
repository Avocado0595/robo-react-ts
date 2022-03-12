
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import RoboList from './components/robo/RoboList';
import Search from './components/searchbar/Search';
import IRobo from './interfaces/IRobo';

function App() {
  const [robos, setRobos] = useState<Array<IRobo>>([]);
  const [searchText, setSearchText] = useState<string>('');
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setRobos(data))
},[]);

const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setSearchText(e.target.value.trim().toLowerCase());
}

const roboList = robos?.filter(
  (robo:IRobo)=>robo.name.toLowerCase().includes(searchText));
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(to right,#008080,#8299a6)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '0 4rem',
    }}>
      <Header/>
      <Search handleSearch={handleSearch}/>
      <RoboList roboList={roboList}/>
    </Box>
  )
}

export default App
