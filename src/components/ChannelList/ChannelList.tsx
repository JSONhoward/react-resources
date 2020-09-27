import React from 'react'

import { StyledChannelList } from './ChannelList.styles';
import { webDevChannels } from '../../utils/constants';
import { ChannelsLoading } from './Channels/Channels.styles';

const Channels = React.lazy(() => import('./Channels'))

type Props = {
    openPortal: (id: string) => void
}

const ChannelList: React.FC<Props> = ({ openPortal }) => {
    const channels = webDevChannels.map((el, i) => {
        return (
            <React.Suspense fallback={<ChannelsLoading></ChannelsLoading>}>
                <Channels key={i} openPortal={openPortal} icon={el.icon} title={el.name} channelId={el.id} />
            </React.Suspense>
        )
    })

    return (
        <StyledChannelList>
            {channels}
        </StyledChannelList>
    )
}

export default ChannelList
