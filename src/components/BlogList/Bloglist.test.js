import React from 'react';
import {create} from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { onlineBlogs } from '../../utils/constants';
import BlogList from './'

describe('BlogList Tests', () => {
    test('snapshot matches', () => {
        const tree = create(<BlogList />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('should render blog', () => {
        render(<BlogList />)

        onlineBlogs.map(el => el.name).forEach(blog => {
            expect(screen.getByText(blog)).toBeInTheDocument()
        })
    })
})
