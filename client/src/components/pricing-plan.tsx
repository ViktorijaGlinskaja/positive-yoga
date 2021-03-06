import React from 'react';
import { Button, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import PricingPlanProps from '../typings/pricing-plan-props'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import { IconButton } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textTransform: 'none',
    fontWeight: 600,
    border: '2px solid rgba(0, 0, 0, 0.08)',
    height: '120px',
    minWidth: '343px',
    borderRadius: '16px',
    padding: '16px',
    '&: focus': {
        border: `2px solid ${theme.palette.info.main}`,
    }
}));

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, discount, oldPrice, newPrice, frequency, id, selected, ...rest }) => {

    return (
        <StyledButton key={title} {...rest}>
            <Box component="div"
                sx={{ fontWeight: 600, fontSize: '20px', letterSpacing: '-0.4px' }}>
                {title}
                {discount ?
                    <Chip label={discount}
                        sx={{
                            backgroundColor: 'secondary.contrastText',
                            margin: '0px 10px',
                            fontSize: '12px',
                            fontWeight: 700,
                            borderRadius: '8px',
                            width: '77px',
                            height: '24px'
                        }} />
                    : null}
            </Box>
            <Box component="div">
                <Box component="span"
                    sx={{ fontSize: '24px', marginRight: '4px' }}>
                    {price}
                </Box>
                <Box component="span"
                    sx={{ fontWeight: 400 }}>
                    /month
                </Box>
            </Box>
            <Box component="div"
                sx={{ fontWeight: 400 }}>
                {oldPrice ? <>
                    <Box component="span"
                        sx={{ textDecoration: 'line-through', marginRight: '4px' }}>
                        {oldPrice}
                    </Box>
                    <Box component="span"
                        sx={{ fontWeight: 700, color: 'info.main', marginRight: '4px' }}>
                        {newPrice}
                    </Box>
                </>
                    : null}
                {frequency}
            </Box>
            <IconButton
                sx={{
                    position: 'absolute',
                    alignItems: 'center',
                    right: '0',
                }}
            >
                {selected ? <CheckCircleIcon sx={{ color: 'info.main' }} />
                    : <CircleIcon sx={{ color: 'rgba(0, 0, 0, 0.08)' }} />}
            </IconButton>
        </StyledButton>
    )
};

export default PricingPlan;
