import React from 'react'
import { StyledSections, SectionDescription1, SectionTitle, Section, SectionDescription2, SectionDescription3, Img } from './Sections.styled';
import { webDevChannels, onlineCourses, onlineBlogs } from '../../utils/constants';
import { Transition } from 'react-transition-group';

const Sections = () => {
    const [tick, setTick] = React.useState(0)

    React.useEffect(() => {
        const ticker = setInterval(() => setTick(prev => prev + 1), 2000)

        return () => clearInterval(ticker)
    }, [])

    const channelImages = webDevChannels.map((el, i) => {
        return (
            <Transition key={i} in={i === tick % webDevChannels.length} timeout={1500}>
                {
                    state => (
                        <Img circle={true} state={state} src={webDevChannels[i].icon} alt={webDevChannels[i].name} />
                    )
                }
            </Transition>
        )
    })

    const courseImages = onlineCourses.map((el, i) => {
        return (
            <Transition key={i} in={i === tick % onlineCourses.length} timeout={1500}>
                {
                    state => (
                        <Img circle={false} state={state} src={onlineCourses[i].icon} alt={onlineCourses[i].name} />
                    )
                }
            </Transition>
        )
    })

    const blogImages = onlineBlogs.map((el, i) => {
        return (
            <Transition key={i} in={i === tick % onlineBlogs.length} timeout={1500}>
                {
                    state => (
                        <Img circle={true} state={state} src={onlineBlogs[i].icon} alt={onlineBlogs[i].name} />
                    )
                }
            </Transition>
        )
    })

    return (
        <StyledSections>
            <Section>
                <SectionTitle>
                    Youtube Channels
                </SectionTitle>
                <SectionDescription1>
                    {channelImages}
                </SectionDescription1>
            </Section>
            <Section>
                <SectionTitle>
                    Online Courses
                </SectionTitle>
                <SectionDescription2>
                    {courseImages}
                </SectionDescription2>
            </Section>
            <Section>
                <SectionTitle>
                    Blogs
                </SectionTitle>
                <SectionDescription3>
                {blogImages}
                </SectionDescription3>
            </Section>

        </StyledSections>
    )
}

export default Sections
