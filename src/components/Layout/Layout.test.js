import React from 'react'
import {create} from 'react-test-renderer'
import Layout from './'

describe('Layout Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Layout />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})