import React from 'react'
import LogoBar from '../../components/logo-bar'
import StickyDiscount from '../../components/sticky-discount'
import CheckoutPageHero from './ckeckout-page-hero'
import ReviewSection from './checkout-page-review-section'
import ActionSection from './checkout-page-action-section'

const CheckoutPage = () => {
    return (
        <>
            <StickyDiscount>
                50%<div style={{ fontWeight: 400, margin: '5px' }}> discount only valid for</div> 00:15:49
            </StickyDiscount >
            <LogoBar />
            <CheckoutPageHero />
            <ReviewSection />
            <ActionSection />
        </>
    )
}

export default CheckoutPage