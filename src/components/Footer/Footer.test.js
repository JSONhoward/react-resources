import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {create} from 'react-test-renderer'
import Footer from './'

describe('Footer Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Router><Footer /></Router>).toJSON()

        expect(tree).toMatchSnapshot()
    })
})