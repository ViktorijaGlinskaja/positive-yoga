import React from 'react'
import LogoBar from '../../components/logo-bar'
import StickyDiscount from '../../components/sticky-discount'
import CheckoutPageHero from './ckeckout-page-hero'

const CheckoutPage = () => {
    return (
        <>
            <StickyDiscount>
                50%<div style={{ fontWeight: 400, margin: '5px' }}> discount only valid for</div> 00:15:49
            </StickyDiscount >
            <LogoBar />
            <CheckoutPageHero />
        </>
    )
}

export default CheckoutPage