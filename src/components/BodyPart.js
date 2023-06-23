import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

//item is option to be rendered
//setbodypart is the funtion that can update the selected part
//bodypart is the currently selected
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        //this stack is clickable!sd
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                background: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            //updates the current bodypart and scrolls the specific part of page
            //*still in dev*
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            }}
        >
            <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3A1212'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart