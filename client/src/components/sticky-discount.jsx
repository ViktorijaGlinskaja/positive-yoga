import React from 'react';
import {
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.blue,
    color: theme.palette.secondary.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    size: '15px',
    fontWeight: 600,
    height: '56px',
}))

const StickyDiscount = ({ children, ...rest }) => (
    <StyledBox {...rest}>
        <div style={{ marginRight: '25px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5Z" fill="white" />
            </svg>
        </div>
        {children}
    </StyledBox>
);

export default StickyDiscount;