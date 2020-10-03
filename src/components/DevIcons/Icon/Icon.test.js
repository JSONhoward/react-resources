import React from 'react';
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Icon from './'

describe('Icon Tests', () => {
    test('Snapshot Tests', () => {
        const tree = create(<Icon />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders props', () => {
        const testTitle = 'test title',
            testIcon = 'test icon'

        render(<Icon title={testTitle} icon={testIcon} />)

        expect(screen.getByTestId(`devIcon${testTitle}`)).toHaveAttribute('src', testIcon)
        expect(screen.getByTestId(`devIcon${testTitle}`)).toHaveAttribute('alt', testTitle)
    })
})