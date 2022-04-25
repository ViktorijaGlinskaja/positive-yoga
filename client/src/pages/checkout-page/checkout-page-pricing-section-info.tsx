import React from 'react';
import { Box, Typography } from '@mui/material';
import PlanIcon from '../../components/assets/plan-icon.svg';
import ExerciseIcon from '../../components/assets/exercise-icon.svg';
import ShoeIcon from '../../components/assets/shoe-icon.svg';
import DietIcon from '../../components/assets/diet-icon.svg';
import WhistleIcon from '../../components/assets/whistle-icon.svg';
import SmartwatchIcon from '../../components/assets/smartwatch-icon.svg';
import BookcheckIcon from '../../components/assets/bookcheck-icon.svg';
import PricingSectionInfoList from '../../components/pricing-section-info-list';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: 700,
    margin: '24px auto',
    [theme.breakpoints.up('sm')]: {
        margin: 0,
    },
}))

const StyledBox = styled(Box)(({ theme }) => ({
    maxWidth: '343px',
    margin: '0px auto',
    [theme.breakpoints.up('md')]: {
        margin: 0,
    },
}))

const PricingSectionInfo: React.FC = () => {
    const contentInfo = [
        { id: 1, icon: <img alt="plan" src={PlanIcon} />, title: 'A personalized yoga program', description: 'Completely safe and focused on your key goals' },
        { id: 2, icon: <img alt="plan1" src={ExerciseIcon} />, title: 'Easy & enjoyable yoga workouts for your level', description: 'Program adjusts to your level and pace' },
        { id: 3, icon: <img alt="plan2" src={ShoeIcon} />, title: 'No special preparation needed', description: 'Perfect for begginners! Requires no special preparation or equipment' },
        { id: 4, icon: <img alt="plan3" src={DietIcon} />, title: 'Daily motivation & accountability', description: 'Track your progress, develop a healthy routine, reach goals faster' },
        { id: 5, icon: <img alt="plan4" src={WhistleIcon} />, title: 'Browse from various yoga challenges', description: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!' },
        { id: 6, icon: <img alt="plan5" src={SmartwatchIcon} />, title: 'Easy access on any device', description: 'Do your yoga anywhere across all types of devices' },
        { id: 7, icon: <img alt="plan6" src={BookcheckIcon} />, title: 'A complete guide to get started', description: 'Best tips, guidelines, advice, and recommendations for successful practice' },
    ]
    return (
        <>
            <StyledBox>
                <StyledTypography>
                    What's in my program?
                </StyledTypography>
                {contentInfo.map((content) =>
                    <PricingSectionInfoList key={content.id} icon={content.icon} title={content.title} description={content.description} />
                )}
            </StyledBox>
        </>
    )
};

export default PricingSectionInfo;
