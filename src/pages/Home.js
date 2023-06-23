import React, { useState }from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  //initailized to all to show all workouts at start of homepage
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      //search bar with props to manage the states and pass body part data
      <SearchExercises 
        setBodyPart={setBodyPart} 
        bodyPart={bodyPart} 
        setExercises={setExercises} 
      />
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises}
      />
    </Box>
  )
}

export default Home