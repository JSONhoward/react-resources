import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VideoGrid from './'
import { mockArray } from '../../utils/constants'

describe('VideoGrid Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<VideoGrid />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    // test('Renders Props', () => {
    //     const testChannelId = 'test id',
    //         testOpenPortal = jest.fn(() => console.log('open portal'))

    //     render(<VideoGrid channelId={testChannelId} openPortal={testOpenPortal} />)
    // })

    test('Renders list of videos', () => {
        render(<VideoGrid />)

        mockArray.forEach((el, i) => {
            expect(screen.getByTestId(`singleVideoImage${i}`)).toHaveAttribute('src', el.thumb)
            expect(screen.getByTestId(`singleVideoImage${i}`)).toHaveAttribute('alt', el.title)
            expect(screen.getByText(el.title)).toBeInTheDocument()
        })
    })
})