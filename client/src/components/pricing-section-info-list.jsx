import React from 'react';
import { Box } from '@mui/material';

const PricingSectionInfoList = ({ id, icon, title, description }) => (
    <Box component="div" key={id} sx={{ display: 'flex', margin: '10px 0px', alignItems: 'center' }}>
        <Box component="span">
            {icon}
        </Box>
        <Box sx={{ margin: '0px 16px' }}>
            <Box component="div" sx={{ fontSize: '15px', fontWeight: 600 }}>
                {title}
            </Box>
            <Box component="div" sx={{ fontSize: '12px', opacity: '0.64' }}>
                {description}
            </Box>
        </Box>
    </Box>

);

export default PricingSectionInfoList;
