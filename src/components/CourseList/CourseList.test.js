import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CourseList from './'
import { onlineCourses } from '../../utils/constants'

describe('CourseList Test', () => {
    test('snapshot matches', () => {
        const tree = create(<CourseList />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('renders each course as child', () => {
        render(<CourseList />)

        onlineCourses.forEach((course, i) => {
            expect(screen.getByText(course.name)).toBeInTheDOM()
        })
    })
})
