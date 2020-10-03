import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {create} from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Sections from './'
import { onlineBlogs, onlineCourses, webDevChannels } from '../../utils/constants'

describe('Sections Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Router><Sections /></Router>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders each channel icon', () => {
        render(<Router><Sections /></Router>)

        webDevChannels.forEach(({icon, name}, i) => {
            expect(screen.getByTestId(`sectionChannelLink${i}`)).toHaveAttribute('href', '/channels')
            expect(screen.getByTestId(`sectionChannelIcon${i}`)).toHaveAttribute('src', icon)
            expect(screen.getByTestId(`sectionChannelIcon${i}`)).toHaveAttribute('alt', name)
        })
    })

    test('Renders each course icon', () => {
        render(<Router><Sections /></Router>)

        onlineCourses.forEach(({icon, name}, i) => {
            expect(screen.getByTestId(`sectionCourseLink${i}`)).toHaveAttribute('href', '/courses')
            expect(screen.getByTestId(`sectionCourseIcon${i}`)).toHaveAttribute('src', icon)
            expect(screen.getByTestId(`sectionCourseIcon${i}`)).toHaveAttribute('alt', name)
        })
    })

    test('Renders each blog icon', () => {
        render(<Router><Sections /></Router>)

        onlineBlogs.forEach(({icon, name}, i) => {
            expect(screen.getByTestId(`sectionBlogLink${i}`)).toHaveAttribute('href', '/blogs')
            expect(screen.getByTestId(`sectionBlogIcon${i}`)).toHaveAttribute('src', icon)
            expect(screen.getByTestId(`sectionBlogIcon${i}`)).toHaveAttribute('alt', name)
        })
    })
})