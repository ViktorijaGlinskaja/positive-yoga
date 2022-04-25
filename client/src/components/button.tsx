import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    fontWeight: 700,
    letterSpacing: '-0.4px',
    textTransform: 'none',
    width: '343px',
    maxWidth: '343px',
    '& .MuiTypography-root': {
        color: theme.palette.secondary.light,
    },
    '&: hover': {
        '& .MuiTypography-root': {
            color: theme.palette.info.main,
        },
        border: `2px solid ${theme.palette.info.main}`,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.info.main,
    },
    '&: focus': {
        '& .MuiTypography-root': {
            color: theme.palette.secondary.light,
        },
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
    },
}));

const OrangeButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
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
