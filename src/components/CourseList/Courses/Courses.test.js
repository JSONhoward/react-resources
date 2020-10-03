import React from 'react'
import { create } from 'react-test-renderer'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Courses from './'

describe('Courses Tests', () => {
    test('snapshot test', () => {
        const tree = create(<Courses />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('renders props', () => {
        const testIcon = 'test icon',
            testTitle = 'test title',
            testUrl = 'test url'

        render(<Courses icon={testIcon} title={testTitle} url={testUrl} />)

        expect(screen.getByTestId('courseIcon')).toHaveAttribute('src', testIcon)
        expect(screen.getByTestId('courseLink')).toHaveAttribute('href', testUrl)
        expect(screen.getByText(testTitle)).toBeInTheDocument()
    })
})