import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PageHeading from './'

describe('PageHeading Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<PageHeading />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders Prop', () => {
        const testHeading = 'test heading'
        render(<PageHeading heading={testHeading} />)

        expect(screen.getByText(testHeading)).toBeInTheDocument()
    })
})