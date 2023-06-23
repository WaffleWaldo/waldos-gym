import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

//exerciseVideos is from youtube api and name is just the name of the exercise
const ExerciseVideos = ({ exerciseVideos, name }) => {

  // if(!ExerciseVideos.length()) return 'Loading...'

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px', }}} p='20px '>
      <Typography variant='h4' mb='33px' >
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' } }>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '100px', xs: '0'}
        }}
      >
        //this array is mapped over for each vid and an 'a' tag[youtube vid] is linked for each
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='blank'
            rel='noreferrer'
          >
            //thumbnail for the vid
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box variant='h5' color='#000'>
              {item.video.title}
            </Box>
            <Box variant='h4' color='#000'>
              {item.video.channelName}
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos