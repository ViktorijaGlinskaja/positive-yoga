import React from 'react'
import { Box } from '@mui/material'
import ActivityApp from '../../components/assets/activity-app.png'
import ArticleApp from '../../components/assets/articles-app.png'

const AppSection = () => {
    return (
        <Box sx={{ position: 'relative', minWidth: '360px', maxWidth: '600px' }}>
            <svg width="100%" height="100%" viewBox="0 0 375 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M375 0L0 200V433L375 233V0Z" fill="#EBEBEB" />
            </svg>
            <img style={{ position: 'absolute', left: '5%', top: '10%', height: '325.79px', width: '161.87px' }} alt="App" src={ActivityApp} />
            <img style={{ position: 'absolute', right: '5%', top: '20%', height: '325.79px', width: '161.87px' }} alt="App" src={ArticleApp} />
        </Box>
    )
}

export default AppSection