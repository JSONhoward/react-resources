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
            <CourseIcon data-testid='courseIcon' src={icon} />
            <CourseTitle>{title}</CourseTitle>
            <CourseLink data-testid='courseLink' href={url} target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt size={'2rem'} /></CourseLink>
        </StyledCourses>
    )
}

export default Courses
