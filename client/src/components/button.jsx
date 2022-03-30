import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    fontWeight: 700,
    letterSpacing: '-0.4px',
    textTransform: 'none',
    width: '100%',
    '& .MuiTypography-root': {
        color: theme.palette.secondary.white,
    },
    '&: hover': {
        '& .MuiTypography-root': {
            color: theme.palette.info.main,
        },
        border: `2px solid ${theme.palette.info.main}`,
        backgroundColor: theme.palette.secondary.white,
        color: theme.palette.info.main,
    },
    '&: focus': {
        '& .MuiTypography-root': {
            color: theme.palette.secondary.white,
        },
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
    },
}));

const OrangeButton = ({ children, ...rest }) => (
    <StyledButton
        type="submit"
        variant="contained"
        sx={{
            height: '56px', borderRadius: '8px', boxShadow: `0px 16px 32px rgba(255, 155, 78, 0.24)`, margin: '8px 0px',
        }}
        {...rest}
    >
        {children}
    </StyledButton>
);

export default OrangeButton;
