import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppSection from './checkout-page-app-section';
import CheckCircle from '../../components/assets/check-circle-green.svg';

const StyledTypography = styled(Typography)(() => ({
    fontSize: '20px',
    margin: '24px 24px',
    fontWeight: 700,
}));

const StyledBox = styled(Box)(({theme}) => ({
    margin: '40px 0px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        gap: '24px',
    },
}));

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
        <StyledBox>
            <Box>
            <StyledTypography>
                Is Positive Yoga right for me?
            </StyledTypography>
                {points.map((point, index) =>
                    <div key={index} style={{ display: 'flex', margin: '8px 24px', alignItems: 'flex-start', width: '90%' }}>
                        <img alt='check' src={CheckCircle} />
                        <div style={{ fontSize: '14px', marginLeft: '16px' }}>{point}</div>
                    </div>)}
            </Box>
            <AppSection/>
        </StyledBox>
    )
};

export default ActionSection;
