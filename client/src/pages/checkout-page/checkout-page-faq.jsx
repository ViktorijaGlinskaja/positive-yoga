import React from 'react';
import { Box, Typography } from '@mui/material';
import OrangeButton from '../../components/button';
import FaqAccordion from '../../components/accordion';

const Faq = () => {
    const questions = [
        { title: "What happens after I order?", answer: "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. " },
        { title: "Where I can access my plan?", answer: "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase." },
        { title: "How can I cancel my subscription?", answer: "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app" },
        { title: "Why this program is paid?", answer: "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! " },
    ]
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
            <Box sx={{ color: 'secondary.black' }}>
                <Typography sx={{ margin: '16px 24px', fontSize: '20px', fontWeight: 700, textAlign: { sm: 'center' } }}>
                    Frequently Asked Questions
                </Typography>
            </Box>
            <Box sx={{ display: 'grid', width: {xs:'343px', sm:'450px', md: '700px'}, margin:'auto' }}>
                {questions.map((question) =>
                    <FaqAccordion key={question.index} title={question.title} answer={question.answer} />
                )}
                <Box sx={{ margin: ' 40px auto' }}>
                    <OrangeButton> Get my plan</OrangeButton>
                </Box>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', textAlign: { sm: 'center' } }}>
                    Start your yoga program today!
                </Typography>
            </Box>
        </Box>
    )
};

export default Faq;
