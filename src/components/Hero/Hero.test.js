import React from 'react';
import {create} from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from './'

describe('Hero Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Hero />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Subtitle is rendered', () => {
        render(<Hero />)

        expect(screen.getByText('Various resources for learning React.js')).toBeInTheDocument()
    })
})