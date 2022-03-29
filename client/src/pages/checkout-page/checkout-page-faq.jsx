import React from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrangeButton from '../../components/button';

const Faq = () => {
    const questions = [
        { title: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. " },
        { title: "Where I can access my plan?", answer: "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase." },
        { title: "How can I cancel my subscription?", answer: "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app" },
        { title: "Why this program is paid?", answer: "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! " },
    ]
    return (
        <>
            <Box sx={{ textAlign: 'center', alignItems: 'stretch', color: 'secondary.black' }}>
                <Typography sx={{ margin: '24px 0px', fontSize: '20px', fontWeight: 700 }}>
                    Frequently Asked Questions
                </Typography>
            </Box>
            <Box sx={{ display: 'grid', margin: '0px 24px' }}>
                {questions.map((question, index) =>
                    <Accordion key={question.index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'secondary.darkGrey' }}>{question.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'secondary.darkGrey', fontSize: '14px', fontWeight: 400 }}>
                                {question.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
                <Box sx={{ margin: ' 40px 0px' }}>
                    <OrangeButton> Get my plan</OrangeButton>
                </Box>
                <Typography sx={{fontSize:'24px', fontWeight: 700}}>
                Start your yoga program today!
                </Typography>
            </Box>
        </>
    )
}

export default Faq