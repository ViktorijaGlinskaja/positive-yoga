import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PricingSection from './checkout-page-pricing-section';

type PricingPlanBoxProps = BoxProps & {
    pricingPlan: number,
    setPricingPlan: (index: number) => void,
}

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '24px 0px 24px 20px',
    gap: '8px',
    height: '100px',
    [theme.breakpoints.up('md')]: {
        alignItems: 'center'
},
}))


const HomePageHero: React.FC<PricingPlanBoxProps> = ({pricingPlan, setPricingPlan}) => {
    return (
        <>
            <StyledBox>
                <Typography sx={{ fontSize: '14px' }}>Over <strong>52 147</strong> plans ordered.</Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '28px', color: 'secondary.dark' }}>Get access to your yoga program now!</Typography>
            </StyledBox>
            <PricingSection pricingPlan={pricingPlan} setPricingPlan={setPricingPlan}/>
        </>
    )
};

export default HomePageHero;
