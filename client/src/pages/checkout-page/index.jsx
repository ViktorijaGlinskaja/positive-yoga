import React, { useState } from 'react';
import LogoBar from '../../components/logo-bar';
import StickyDiscount from '../../components/sticky-discount';
import CheckoutPageHero from './ckeckout-page-hero';
import ReviewSection from './checkout-page-review-section';
import ActionSection from './checkout-page-action-section';
import Faq from './checkout-page-faq';
import PricingSection from './checkout-page-pricing-section';

const CheckoutPage = () => {
    const [pricingPlan, setPricingPlan] = useState(null);
    return (
        <>
            <StickyDiscount>
                50%<div style={{ fontWeight: 400, margin: '5px' }}> discount only valid for</div> 00:15:49
            </StickyDiscount >
            <LogoBar />
            <CheckoutPageHero pricingPlan={pricingPlan} setPricingPlan={setPricingPlan} />
            <ReviewSection />
            <ActionSection />
            <Faq />
            <PricingSection pricingPlan={pricingPlan} setPricingPlan={setPricingPlan} />
        </>
    )
};

export default CheckoutPage;