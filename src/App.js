import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    //MUI container with additional styles *refer to mui
    <Box width="400px" sx={{ width: { x1: '1488px' }}} m='auto' >
        <Navbar />
        <Routes>
            //root path that points to Home
            <Route path="/" element={<Home />} />
            //points to ExerciseDetail page based on id param
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App