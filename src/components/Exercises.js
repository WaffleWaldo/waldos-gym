import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


//main section of the site show casing all exercises using pagination
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  //state and options for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  //fetches exercises data based on bodypart prop, triggered when bodypart changes
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart]);

  return (
    <Box id='exercises'
      sx={{mt: { lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      //used to display exercise cards with set styles
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px '}}}
        flexWrap='wrap'
        justifyContent='center'
        >
          //receives exercise object as prop to showcase in more detail when clicked
          //does this for all exercises in the api following styles and pagination set options
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </Stack>
      <Stack 
        mt='100px' 
        alignItems='center' 
      >
          //gotta love the pagination component 
            {exercises.length > 9 && (
              <Pagination 
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size='large'
              />
            )}
      </Stack>
    </Box>
  )
}

export default Exercises