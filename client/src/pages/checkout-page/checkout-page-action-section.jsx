import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckCircle from '../../components/assets/check-circle-green.svg'

const ActionSection = () => {
    const points = [
        'Each program adapts to your age or fitness level',
        'Mindful way to exercise and get real results',
        'Effective and long-term lasting results',
        'Suited activities that benefit both the mind and body',
        'Low-intensity but highly-effective workouts',
        'Extra attention to muscle, joint and back health'
    ]
    return (
        <Box sx={{ margin: '40px 24px' }}>
            <Typography sx={{ fontSize: '20px', margin: '24px 0px', fontWeight: 700 }}>
                Is Positive Yoga right for me?
            </Typography>
            <Box>
                {points.map((point, index) =>
                    <div key={index} style={{ display: 'flex', marginBottom: '8px', alignItems: 'flex-start', width: '90%' }}>
                        <img alt='check' src={CheckCircle} />
                        <div style={{ fontSize: '14px', marginLeft: '16px' }}>{point}</div>
                    </div>)}
            </Box>
            <Typography sx={{ fontSize: '20px', margin: '24px 0px', fontWeight: 700 }}>
                Start your yoga journey now!
            </Typography>
        </Box>
    )
}

export default ActionSection