import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { Typography } from '@mui/material';
import SafeCheckoutImg from '../../components/assets/safe-checkout.png';
import PricingPlanBox from '../../components/pricing-plan-box';
import OrangeButton from '../../components/button';
import PricingSectionInfo from './checkout-page-pricing-section-info';
import { styled } from '@mui/material/styles';

type PricingSectionBoxProps = BoxProps & {
    pricingPlan: number,
    setPricingPlan: (index: number) => void,
} 

const StyledTypography = styled(Typography)(() => ({
    margin: '16px 0px',
    fontSize: '12px',
}))

const StyledBox = styled(Box)(({ theme }) => ({
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
    },
}))

const PricingSection: React.FC<PricingSectionBoxProps> = ({ pricingPlan, setPricingPlan }) => (
    <StyledBox>
        <Box sx={{ maxWidth: '340px', margin: { xs: 'auto', sm: '0px 16px' } }}>
            <Typography sx={{ color: 'primary.main', display: 'inline', fontWeight: 700, fontSize: '20px' }}>Choose your plan and get <Typography sx={{ color: 'info.main', display: 'inline', fontWeight: 700, fontSize: '20px' }}>7 days free trial </Typography></Typography>
            <PricingPlanBox pricingPlan={pricingPlan} setPricingPlan={setPricingPlan} />
            <OrangeButton>
                Get your plan
            </OrangeButton>
            <Box sx={{ textAlign: 'center', alignItems: 'stretch', color: 'secondary.dark' }}>
                <StyledTypography>
                    After 7 days free trial subscription payment is automatically charged from your account unless it is canceled at least 24 hours before the end of the trial period.
                </StyledTypography>
                <StyledTypography>
                    By choosing a payment method you agree to the T&Cs and Privacy Policy
                </StyledTypography>
                <img alt="safe checkout" src={SafeCheckoutImg} />
            </Box>
        </Box>
        <PricingSectionInfo />
    </StyledBox >
);

export default PricingSection;