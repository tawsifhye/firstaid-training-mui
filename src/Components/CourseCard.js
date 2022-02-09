import { Box } from '@mui/system';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TagLine from './shared/Tagline';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CourseCard = ({ course }) => {
    const { id, title, coverImage, enrolledStudents, rating, regularPrice } = course;
    console.log(course);
    return (
        <Box sx={{
            my: '30px',
            padding: '10px',
            mr: '20px',
            background: '#FFFFFF',
            boxShadow: '0px 45.799px 106.864px rgba(234, 46, 16, 0.06)',
            borderRadius: '19.0829px'
        }}>
            <img style={{ width: '100%', marginBottom: '10px', borderRadius: '19.08px' }} src={coverImage} alt="" />
            <TagLine text={<div>{title}</div>} fontSize="20px" />

            <Box sx={{
                mt: '30px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <PeopleIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>{enrolledStudents}</span>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MilitaryTechIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>CPD Accrediated</span>
                </Box>
            </Box>

            <Button variant="outlined" sx={{
                width: '100%',
                mt: '50px',
                border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                color: '#EA2E10',
                fontWeight: 600,
            }}>
                <ShoppingCartIcon />
                Add to Cart
            </Button>
        </Box>
    );
};

export default CourseCard;