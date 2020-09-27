import React from 'react'
import { StyledCourses, CourseIcon, CourseTitle, CourseLink } from './Courses.styles';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
    icon: string,
    title: string,
    url: string
}

const Courses: React.FC<Props> = ({ icon, title, url }) => {
    return (
        <StyledCourses>
            <CourseIcon src={icon} />
            <CourseTitle>{title}</CourseTitle>
            <CourseLink onClick={() => window.open(url, '_blank')}><FaExternalLinkAlt size={'2rem'} /></CourseLink>
        </StyledCourses>
    )
}

export default Courses
