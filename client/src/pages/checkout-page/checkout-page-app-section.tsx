import React from 'react';
import { Box, Typography } from '@mui/material';
import ActivityApp from '../../components/assets/activity-app.png';
import ArticleApp from '../../components/assets/articles-app.png';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(() => ({
    fontSize: '20px',
    margin: '24px 24px',
    fontWeight: 700,
}));

const AppSection: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', width: { sm: '343px' } }}>
            <StyledTypography>
                Start your yoga journey now!
            </StyledTypography>
            <Box sx={{ opacity: { sm: 0 } }}>
                <svg style={{ minWidth: '100%', maxWidth: '600px' }} height="100%" viewBox="0 0 375 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M375 0L0 200V433L375 233V0Z" fill="#EBEBEB" />
                </svg>
            </Box>
            <Box sx={{margin: '24px 0px'}}>
                <img style={{ position: 'absolute', left: '2.5%', top: '15%', height: '325.79px', width: '161.87px' }} alt="App" src={ActivityApp} />
                <img style={{ position: 'absolute', right: '2.5%', top: '25%', height: '325.79px', width: '161.87px' }} alt="App" src={ArticleApp} />
            </Box>
        </Box>
    )
};

export default AppSection;
