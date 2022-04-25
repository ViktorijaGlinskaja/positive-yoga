import React from 'react';
import { Paper, PaperProps } from '@mui/material';

type ReviewCardProps = PaperProps & {
    index: number,
    name: string,
    city: string,
    rating: JSX.Element,
    img: JSX.Element,
    description: string,
}

const ReviewCard: React.FC<ReviewCardProps> = ({ index, name, city, rating, img, description }) => (
    <Paper key={index} sx={{ width: '319px', height: '607px', borderRadius: '16px', padding: '16px', boxShadow: '0px 16px 32px rgba(57, 53, 60, 0.08)', alignSelf: 'stretch', margin: 'auto' }}>
        <p style={{ fontSize: '15px', fontWeight: 600, margin: 0 }}>{name}</p>
        <p style={{ opacity: '0.64', fontSize: '12px', margin: 0 }}>{city}</p>
        <div style={{ margin: '16px 0px' }}>{rating}</div>
        {img}
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </Paper>
);

export default ReviewCard;
