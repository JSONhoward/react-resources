import React from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group';
// @ts-ignore
import ReactPlayer  from 'react-player/youtube'

import { StyledVideoPlayer } from './VideoPlayer.styles';

type Props = {
    url: string | null,
    close: (event: React.MouseEvent<HTMLDivElement>) => void
}

const VideoPlayer: React.FC<Props> = ({url, close}) => {
    const [mounted, setMounted] = React.useState<boolean>(false)
    const mount: HTMLElement | null = document.getElementById('portal-root')
    const newDiv: HTMLDivElement = document.createElement('div')

    React.useEffect((): any => {
        document.body.style.overflow = 'hidden'
        mount?.appendChild(newDiv)
        setMounted(true)

        return (): void => {
            document.body.style.overflow = 'auto'
            mount?.removeChild(newDiv)
        }
    }, [mount, mounted, newDiv])

    return createPortal(
        <Transition in={mounted} timeout={1000}>
            {
                state => (
                    <StyledVideoPlayer onClick={close} id='portal' state={state}>
                        <ReactPlayer data-testid='reactVideoPlayer' id='player' url={url} />
                    </StyledVideoPlayer>
                )
            }
        </Transition>
        , newDiv
    )
}

export default VideoPlayer
