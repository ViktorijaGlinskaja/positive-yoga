import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, AccordionProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FaqAccordionProps = AccordionProps & {
    answer: string,
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ title, answer }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.secondary' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey.secondary' }}>
                {answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
);

export default FaqAccordion;