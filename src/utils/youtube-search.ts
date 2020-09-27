const YOUTUBE_SEARCH_URL = (channel: string, limit: string): string => `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}${limit}&q=react&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`

export const getVideoList = async (channel: string, limit = 50): Promise<Video[]> => {
    const response = await fetch(YOUTUBE_SEARCH_URL(channel, `&maxResults=${limit.toString()}`))
    const data = await response.json()

    const videos: Video[] = await data['items'].map((result: { id: { videoId: any }; snippet: { title: any; description: any; thumbnails: { high: { url: any } } } }) => {
        return {
            id: result.id.videoId,
            url: `http://www.youtube.com/watch?v=${result.id.videoId}`,
            title: result.snippet.title,
            description: result.snippet.description,
            thumb: result.snippet.thumbnails.high.url
        }
    })

    return videos
}