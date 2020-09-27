import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { mockArray } from '../../utils/constants';
import { getVideoList } from '../../utils/youtube-search';

import { StyledVideoGrid, SingleVideo, Videos, VideoImagePlay } from './VideoGrid.styles';

type Props = {
    openPortal: (id: string) => void,
    currentVideo: string | null,
    portalOpen: boolean,
    closePortal: (event: React.MouseEvent<HTMLDivElement>) => void,
    channelId: string
}

const VideoGrid: React.FC<Props> = ({ channelId, openPortal, currentVideo, closePortal, portalOpen }) => {
    const [videoImages, setVideoImages] = React.useState<Video[] | undefined>(undefined)
    const [startTransition, isPending] = React.unstable_useTransition({ timeoutMs: 2000 })

    // React.useEffect(() => {
    //     getVideoList(channelId, 10)
    //     .then(videos => setVideoImages(videos))
    //     .catch(error => console.error('Error: ', error))
    // }, [])

    React.useEffect(() => {
        startTransition(() => setVideoImages(mockArray))
    })

    const videoList = videoImages?.map((el, i) => {
        return (
            <SingleVideo onClick={() => openPortal(el.url)} key={i}>
                <VideoImagePlay>
                    <span>{el.title}</span>
                    <FaPlay size={'3rem'} color={'white'} />
                </VideoImagePlay>
                <img src={el.thumb} alt={el.title} />
            </SingleVideo>
        )
    })

    return (
        <StyledVideoGrid>
            <Videos>
                {videoList}
            </Videos>
        </StyledVideoGrid>
    )
}

export default VideoGrid
