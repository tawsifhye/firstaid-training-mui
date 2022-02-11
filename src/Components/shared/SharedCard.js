import { Button, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TagLine from './Tagline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const SharedCard = ({ resource }) => {
    return (

        <Card sx={{ maxWidth: 300, pt: '30px', mt: '20px' }}>
            <Box sx={{ backgroundColor: '#FDE3E0', width: '60px', borderRadius: '50%', padding: '40px', mx: 'auto' }}>
                <img style={{ width: '50px', }} src={resource.icon} alt="" />
            </Box>
            <CardContent sx={{ mt: '20px' }}>
                <TagLine text={resource.title} fontWeight={500} fontSize='20px' />
                <Button variant="outlined" sx={{
                    width: '100%',
                    mt: '50px',
                    border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                    color: '#EA2E10',
                    fontWeight: 600,
                }}>
                    Explore Now
                    <ArrowRightAltIcon />
                </Button>
            </CardContent>
        </Card>
    );
};

export default SharedCard;