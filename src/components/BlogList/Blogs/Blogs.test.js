import React from 'react'
import {create} from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Blogs from './'

describe('Blogs Tests', () => {
    test('snapshot', () => {
        const tree = create(<Blogs />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('renders props correctly', async () => {
        const testIcon = 'https://via.placeholder.com/150',
            testTitle = 'test title',
            testUrl = 'https://google.com'

        render(<Blogs icon={testIcon} title={testTitle} url={testUrl} />)

        expect(screen.getByText(testTitle)).toBeTruthy()
        expect(screen.getByTestId('blogIcon')).toHaveAttribute('src', testIcon)
        expect(screen.getByTestId('blogLink')).toHaveAttribute('href', testUrl)
    })
})