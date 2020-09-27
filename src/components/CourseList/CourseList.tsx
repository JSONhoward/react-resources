import React from 'react'
import { StyledCourseList } from './CourseList.styles';
import { onlineCourses } from '../../utils/constants';
import Courses from './Courses';

const CourseList = () => {
    const courses = onlineCourses.map((el, i) => {
        return (
            <Courses key={i} icon={el.icon} title={el.name} url={el.url} />
        )
    })

    return (
        <StyledCourseList>
            {courses}
        </StyledCourseList>
    )
}

export default CourseList
