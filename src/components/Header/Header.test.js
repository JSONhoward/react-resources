import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {create} from 'react-test-renderer'
import Header from './'

describe('Header Test', () => {
    test('Snapshot Test', () => {
        const tree = create(<Router><Header /></Router>).toJSON()

        expect(tree).toMatchSnapshot()
    })
})