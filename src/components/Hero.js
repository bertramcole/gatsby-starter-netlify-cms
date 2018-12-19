import React from 'react'
import Content from '../components/Content'
import {Hero, HeroBody, HeroHeader, HeroFooter, Tab, Tabs, TabList, TabLink, Container, Title  } from 'bloomer'

const HeroTemplate = () => {
    return (
        <Hero isColor='danger' isSize='medium'>
        <HeroHeader>
        </HeroHeader>
        
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>Title</Title>
            </Container>
        </HeroBody>
        
        <HeroFooter>
            <Tabs isBoxed isFullWidth>
                <Container>
                    <TabList>
                        <Tab is active><TabLink>Overview</TabLink></Tab>
                        <Content />
                        <Tab><TabLink>Next</TabLink></Tab>
                        <Tab><TabLink onclick="">Element</TabLink></Tab>
                        <Tab><TabLink>Components</TabLink></Tab>
                        <Tab><TabLink>Layout</TabLink></Tab>
                    </TabList>
                </Container>
            </Tabs>
        </HeroFooter>
        </Hero>
    );
}

export default HeroTemplate