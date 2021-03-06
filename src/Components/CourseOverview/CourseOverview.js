import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import AboutCourse from './AboutCourse';
import CourseCertificate from './CourseCertificate';
import CourseIndex from './CourseIndex';
import CourseOverviewBanner from './CourseOverviewBanner';
import Curriculam from './Curriculam';

const CourseOverview = () => {
    const contextData = useContext(DataContext);
    const { state, dispatch } = contextData;
    const { courses } = state;
    const { id } = useParams();
    const [singleCourse, setSingleCourse] = useState({});

    useEffect(() => {
        const selectedCourse = courses.find(course => course.id === id)
        setSingleCourse(selectedCourse);
    }, [courses, id])

    return (
        <Box >
            <CourseOverviewBanner course={singleCourse} />
            <CourseIndex />
            <AboutCourse course={singleCourse} />
            <Curriculam />
            <CourseCertificate />
        </Box>
    );
};

export default CourseOverview;