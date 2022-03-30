
import React from 'react';
import { Box } from '@mui/material';
import PricingPlan from './pricing-plan';

const PricingPlanBox = ({ pricingPlan, setPricingPlan }) => {

    const pricingInfo = [
        { id: 1, title: '6 month plan', price: '$9.99', oldPrice: '$119.94', newPrice: '$59.94', frequency: 'billed every 6 months' },
        { id: 2, title: '3 month plan', price: '$14.99', oldPrice: '$59.97', newPrice: '$44.97', frequency: 'billed every 3 months' },
        { id: 3, title: '1 month plan', price: '$19.99', frequency: 'Billed monthly' },
    ]
    return (
        <Box sx={{ margin: '16px 0px', display: 'grid', gap: '8px' }} >
            {pricingInfo.map((plan, index) => <PricingPlan selected={pricingPlan === index} onClick={() => setPricingPlan(index)} key={plan.id} title={plan.title} price={plan.price} oldPrice={plan.oldPrice} newPrice={plan.newPrice} frequency={plan.frequency} />)}
        </Box>
    )
};

export default PricingPlanBox;
