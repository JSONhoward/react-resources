import React from 'react';
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import VideoPlayer from './'

describe('VideoPlayer Tests', () => {
    test('Renders Video Player', () => {
        render(<div id='portal-root'><VideoPlayer /></div>)

        expect(screen.getByTestId('reactVideoPlayer')).toHaveAttribute('id', 'player')
    })
}) 