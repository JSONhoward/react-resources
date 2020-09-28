import React from 'react'
import { StyledSections, SectionDescription, SectionTitle, Section, Img } from './Sections.styled';
import { webDevChannels, onlineCourses, onlineBlogs } from '../../utils/constants';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';

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
                        <Link to='channels'>
                            <Img circle={true} state={state} src={webDevChannels[i].icon} alt={webDevChannels[i].name} />
                        </Link>
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
                        <Link to='/courses'>
                            <Img circle={false} state={state} src={onlineCourses[i].icon} alt={onlineCourses[i].name} />
                        </Link>
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
                        <Link to='/blogs'>
                            <Img circle={true} state={state} src={onlineBlogs[i].icon} alt={onlineBlogs[i].name} />
                        </Link>
                    )
                }
            </Transition>
        )
    })

    return (
        <StyledSections>
            <Section>
                <SectionTitle>
                    <Link to='/channels'>
                        Youtube Channels
                    </Link>
                </SectionTitle>
                <SectionDescription>
                    {channelImages}
                </SectionDescription>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to='/courses'>
                        Online Courses
                    </Link>
                </SectionTitle>
                <SectionDescription>
                    {courseImages}
                </SectionDescription>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to='/blogs'>
                        Blogs
                    </Link>
                </SectionTitle>
                <SectionDescription>
                    {blogImages}
                </SectionDescription>
            </Section>

        </StyledSections>
    )
}

export default Sections
