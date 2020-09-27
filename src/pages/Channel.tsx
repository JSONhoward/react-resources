import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Hero from '../components/Hero';

import Layout from '../components/Layout/index';
import VideoGrid from '../components/VideoGrid';
import VideoPlayer from '../components/VideoPlayer';

interface MatchParams {
    id: string
}

const Channel: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const [portalOpen, setPortalOpen] = React.useState<boolean>(false)
    const [currentVideo, setCurrentVideo] = React.useState<string | null>(null)
    const { params: {id} } = match

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
                <Hero />
                <VideoGrid channelId={id} portalOpen={portalOpen} currentVideo={currentVideo} openPortal={openPortal} closePortal={closePortal}/>
            </Layout>
        </>
    )
}

export default Channel
