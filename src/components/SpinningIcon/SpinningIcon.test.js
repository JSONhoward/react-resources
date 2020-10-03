import React from 'react'
import {create} from 'react-test-renderer'
import SpinningIcon from '.'

describe('SpinningIcon Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<SpinningIcon />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})