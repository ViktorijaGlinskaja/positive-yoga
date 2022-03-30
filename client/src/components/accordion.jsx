import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion = ({ title, answer }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'secondary.darkGrey' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'secondary.darkGrey' }}>
                {answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
);

export default FaqAccordion;