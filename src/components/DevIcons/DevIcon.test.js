import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DevIcons from './DevIcons'
import { webDevChannels } from '../../utils/constants'

describe('DevIcon Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<DevIcons />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('renders each dev icon', () => {
        render(<DevIcons />)

        webDevChannels.forEach((dev, i) => {
            expect(screen.getByTestId(`devIcon${dev.name}`))
        })
    })
})