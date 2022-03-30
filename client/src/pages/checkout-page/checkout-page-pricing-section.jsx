import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import PricingPlanBox from '../../components/pricing-plan-box';
import OrangeButton from '../../components/button';
import PricingSectionInfo from './checkout-page-pricing-section-info';

const PricingSection = () => (
    <Box sx={{ margin: '24px 24px' }}>
        <Typography sx={{ color: 'primary.main', display: 'inline', fontWeight: 700, fontSize: '20px' }}>Choose your plan and get <Typography sx={{ color: 'info.main', display: 'inline', fontWeight: 700, fontSize: '20px' }}>7 days free trial </Typography></Typography>
        <PricingPlanBox />
        <OrangeButton>
            Get your plan
        </OrangeButton>
        <PricingSectionInfo />
    </Box>
);

export default PricingSection;