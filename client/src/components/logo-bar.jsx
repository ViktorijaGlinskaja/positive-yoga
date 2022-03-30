import React from 'react';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../components/assets/logo.svg';

const StyledBar = styled(Toolbar)(() => ({
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    size: '15px',
}));

const LogoBar = () => (
    <StyledBar >
        <img alt="logo" src={Logo} />
    </StyledBar>
);

export default LogoBar;