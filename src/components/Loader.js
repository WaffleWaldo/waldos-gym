import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

//using fancy infinity loader from react along with mui to place it where it goes
const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%' >
        <InfinitySpin color='gray' />
    </Stack>
  )
}

export default Loader