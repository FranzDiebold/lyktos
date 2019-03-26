import React from 'react';

import { Section, Hero, HeroBody, Container, Title, Subtitle } from 'bloomer';

function NotFound() {
    return (
        <Section className="has-heaven-bg">
            <Hero isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title isSize="2"><span role="img" aria-label="magnifying glass">🔍</span> 404</Title>
                        <Subtitle isSize="3">Not found...</Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
        </Section>
    );
}

export default NotFound;
