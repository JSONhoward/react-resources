import React from 'react'
import { StyledSections, SectionDescription1, SectionTitle, Section, SectionDescription2, SectionDescription3, Img } from './Sections.styled';
import { webDevChannels } from '../../utils/constants';

const Sections = () => {
    const channelImages = webDevChannels.map((el, i) => {
        return  (
            <Img left={(i) * (Math.floor(100 / webDevChannels.length))} key={i} src={el.icon} alt={el.name}/>
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
                    
                </SectionDescription2>
            </Section>
            <Section>
                <SectionTitle>
                Blogs
                </SectionTitle>
                <SectionDescription3>
                </SectionDescription3>
            </Section>
            
        </StyledSections>
    )
}

export default Sections
