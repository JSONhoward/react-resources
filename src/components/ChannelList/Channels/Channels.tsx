import React from 'react'
import { FaPlay } from 'react-icons/fa'

import { ChannelIcon, StyledChannels, ChannelName, ChannelVideos, More, VideoImagePlay, VideoImage } from './Channels.styles';
import { getVideoList } from '../../../utils/youtube-search';

import { Link } from 'react-router-dom';
// import { mockArray } from '../../../utils/constants';

type Props = {
    icon: string,
    title: string,
    channelId: string,
    openPortal: (id: string) => void
}

const Channels: React.FC<Props> = ({ icon, title, channelId, openPortal }) => {
    const [videoImages, setVideoImages] = React.useState<Video[] | undefined>(undefined)

    React.useEffect(() => {
        getVideoList(channelId, 3)
        .then(videos => setVideoImages(videos))
        .catch(error => console.error('Error: ', error))
    }, [])

    // React.useEffect(() => {
    //     setVideoImages(mockArray)
    // },[])

    const videoImagesList = videoImages?.map((el, i) => {
        return (
                <VideoImage onClick={() => openPortal(el.url)} key={i}>
                    <VideoImagePlay>
                        <span>{el.title}</span>
                        <FaPlay size={'3rem'} color={'white'} />
                    </VideoImagePlay>
                    <img src={el.thumb} alt={el.title} />
                </VideoImage>
        )
    })

    return (
        <StyledChannels>
            <ChannelIcon>
                <ChannelName>
                    {title}
                </ChannelName>
                <img title={title} onClick={() => window.open(`https://www.youtube.com/channel/${channelId}`, '_blank')} src={icon} alt={title} />
            </ChannelIcon>
            <ChannelVideos>
                {videoImagesList}
                <Link to={`/channel/${channelId}`}>
                    <More>
                        <p>More Videos</p>
                    </More>
                </Link>
            </ChannelVideos>
        </StyledChannels>
    )
}

export default Channels
