import React from 'react'

import Layout from '../components/Layout/Layout';
import ChannelList from '../components/ChannelList/ChannelList';
import VideoPlayer from '../components/VideoPlayer';

const Channels = () => {
    const [portalOpen, setPortalOpen] = React.useState<boolean>(false)
    const [currentVideo, setCurrentVideo] = React.useState<string | null>(null)

    const openPortal = (id: string): void => {
        setPortalOpen(true)
        setCurrentVideo(id)
    }

    const closePortal = (event: React.MouseEvent<HTMLDivElement>): void => {
        const ID = (event.target as HTMLDivElement).id

        if (ID === 'portal') {
            setPortalOpen(false)
            setCurrentVideo(null)
        }
    }

    return (
        <>
            {portalOpen && <VideoPlayer url={currentVideo} close={closePortal} />}
            <Layout>
                <ChannelList openPortal={openPortal} />
            </Layout>
        </>
    )
}

export default Channels
