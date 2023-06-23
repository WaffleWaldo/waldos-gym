import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollbar'
import Loader from './Loader'

//we are passing in these array props for exercises that target same muscle groups and use same equipment 
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
      <Typography variant='h4'mb={3} >Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        //if exercise vids based on target muscle is avaible then we render this... in HorizontalScrollBar component
      {targetMuscleExercises.length ? 
        <HorizontalScrollBar data={targetMuscleExercises} />
        : <Loader /> }
      </Stack>
      <Typography variant='h4'mb={3} >Exercises that target the same equipment</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
      //if exercise vids based on equipment is avaible then we render this... in HorizontalScrollBar component
      {equipmentExercises.length ? 
        <HorizontalScrollBar data={equipmentExercises} />
        //this loader is basically just a load bar while it renders, since we are call to youtube
        : <Loader /> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises