import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Channels from './Channels';
import { mockArray } from '../../../utils/constants';

describe('snapshot', () => {
    test('snapshot matches', () => {
        const tree = renderer.create(<Router><Channels /></Router>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('renders props correctly', () => {
        const testIcon = 'https/via.placeholder.com/150',
            testTitle = 'test title',
            testChannelId = 'testId',
            testOpenPortal = jest.fn(() => console.log('mock portal'))

        render(<Router><Channels icon={testIcon} title={testTitle} channelId={testChannelId} openPortal={testOpenPortal} /></Router>)

        expect(screen.getByText(testTitle)).toBeInTheDocument()
        expect(screen.getByTestId('channelIcon')).toHaveAttribute('src', testIcon)
        expect(screen.getByTestId('channelId')).toHaveAttribute('href', `https://www.youtube.com/channel/${testChannelId}`)
    })
})

describe('renders each channel', () => {
    const testIcon = 'https/via.placeholder.com/150',
        testTitle = 'test title',
        testChannelId = 'testId',
        testOpenPortal = jest.fn(() => console.log('mock portal'))

    render(<Router><Channels icon={testIcon} title={testTitle} channelId={testChannelId} openPortal={testOpenPortal} /></Router>)

    for (let i = 0; i < mockArray.length; i++) {

        expect(screen.getByTestId(`videoImage${i}`)).toHaveAttribute('src', mockArray[i].thumb)
        expect(screen.getByTestId(`videoImage${i}`)).toHaveAttribute('alt', mockArray[i].title)
        fireEvent.click(screen.getByTestId(`videoImageContainer${i}`))
    }
    expect(testOpenPortal).toHaveBeenCalledTimes(mockArray.length)
})