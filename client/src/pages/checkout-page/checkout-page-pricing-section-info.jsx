import React from 'react'
import { Box, Typography } from '@mui/material'
import SafeCheckoutImg from '../../components/assets/safe-checkout.png'
import { styled } from '@mui/material/styles'
import PlanIcon from '../../components/assets/plan-icon.svg'
import ExerciseIcon from '../../components/assets/exercise-icon.svg'
import ShoeIcon from '../../components/assets/shoe-icon.svg'
import DietIcon from '../../components/assets/diet-icon.svg'
import WhistleIcon from '../../components/assets/whistle-icon.svg'
import SmartwatchIcon from '../../components/assets/smartwatch-icon.svg'
import BookcheckIcon from '../../components/assets/bookcheck-icon.svg'

const StyledTypography = styled(Typography)(() => ({
    margin: '16px 0px',
    fontSize: '12px',
}))

const PricingSectionInfo = () => {
    const contentInfo = [
        { id: 1, icon: <img alt="plan" src={PlanIcon} />, title: 'A personalized yoga program', description: 'Completely safe and focused on your key goals' },
        { id: 2, icon: <img alt="plan" src={ExerciseIcon} />, title: 'Easy & enjoyable yoga workouts for your level', description: 'Program adjusts to your level and pace' },
        { id: 3, icon: <img alt="plan" src={ShoeIcon} />, title: 'No special preparation needed', description: 'Perfect for begginners! Requires no special preparation or equipment' },
        { id: 4, icon: <img alt="plan" src={DietIcon} />, title: 'Daily motivation & accountability', description: 'Track your progress, develop a healthy routine, reach goals faster' },
        { id: 5, icon: <img alt="plan" src={WhistleIcon} />, title: 'Browse from various yoga challenges', description: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!' },
        { id: 6, icon: <img alt="plan" src={SmartwatchIcon} />, title: 'Easy access on any device', description: 'Do your yoga anywhere across all types of devices' },
        { id: 7, icon: <img alt="plan" src={BookcheckIcon} />, title: 'A complete guide to get started', description: 'Best tips, guidelines, advice, and recommendations for successful practice' },
    ]
    return (
        <>
            <Box sx={{ textAlign: 'center', alignItems: 'stretch', color: 'secondary.black' }}>
                <StyledTypography>
                    After 7 days free trial subscription payment is automatically charged from your account unless it is canceled at least 24 hours before the end of the trial period.
                </StyledTypography>
                <StyledTypography>
                    By choosing a payment method you agree to the T&Cs and Privacy Policy
                </StyledTypography>
                <img alt="safe checkout" src={SafeCheckoutImg} />
            </Box>
            <Box>
                <Typography sx={{ margin: '24px 0px', fontSize: '20px', fontWeight: 700 }}>
                    What's in my program?
                </Typography>
                {contentInfo.map((content) =>
                    <Box component="div" key={content.id} sx={{ display: 'flex', margin: '10px 0px', alignItems: 'center' }}>
                        <Box component="span">
                            {content.icon}
                        </Box>
                        <Box sx={{ margin: '0px 16px' }}>
                            <Box component="div" sx={{ fontSize: '15px', fontWeight: 600 }}>
                                {content.title}
                            </Box>
                            <Box component="div" sx={{ fontSize: '12px', opacity: '0.64' }}>
                                {content.description}
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default PricingSectionInfo