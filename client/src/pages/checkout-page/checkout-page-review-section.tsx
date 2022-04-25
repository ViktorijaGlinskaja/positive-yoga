import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/material/styles';
import OrangeButton from '../../components/button';
import ReviewCard from '../../components/review-card';
import FiveStars from '../../components/assets/five-stars-icon.svg';
import Emily from '../../components/assets/emily.png';
import Kylie from '../../components/assets/kylie.png';
import Jesica from '../../components/assets/jesica.png';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '24px 0px',
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        gap: '24px',
    },
}));

const ReviewSection: React.FC = () => {
    const reviews = [
        { name: 'Emily, 28', city: 'Delaware, NJ', rating: <img alt="plan" src={FiveStars} />, img: <img alt="Emily" src={Emily} />, description: 'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.' },
        { name: 'Kylie, 40', city: 'Los Angeles', rating: <img alt="plan" src={FiveStars} />, img: <img alt="Kylie" src={Kylie} />, description: 'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.' },
        { name: 'Jesica, 51', city: 'San Francisco, CA', rating: <img alt="plan" src={FiveStars} />, img: <img alt="Jesica" src={Jesica} />, description: 'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.' },
    ]

    const isSmUp = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));
    const isSmDown = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

    return (
        <StyledBox>
            <Typography sx={{ fontSize: '20px', fontWeight: 700, margin: '24px' }}>
                Hear success stories from our clients
            </Typography>
            {isSmDown && (
                <Carousel sx={{ minHeight: '607px' }}>
                    {
                        reviews.map((person, index) =>
                            <ReviewCard key={index} name={person.name} city={person.city} rating={person.rating} img={person.img} description={person.description.replace('Positive Yoga', '<b>Positive Yoga</b>')} index={index} />)
                    }
                </Carousel>
            )}
            {
                isSmUp && (
                    <Box sx={{ minHeight: '607px', display: 'flex', gap: '16px' }}>
                        {
                            reviews.map((person, index) =>
                                <ReviewCard key={index} name={person.name} city={person.city} rating={person.rating} img={person.img} description={person.description} index={index} />)
                        }
                    </Box>
                )
            }
            <Box sx={{ margin: ' 40px auto' }}>
                <OrangeButton>Get my plan</OrangeButton>
            </Box>
        </StyledBox>
    )
};

export default ReviewSection;
