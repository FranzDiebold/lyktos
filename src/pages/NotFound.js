import React from 'react';

import { Hero, HeroBody, Container, Title, Subtitle } from 'bloomer';

function NotFound() {
    return (
        <Hero className="has-heaven-bg" isSize="large">
            <HeroBody>
                <Container className="has-text-centered">
                    <Title isSize={2}><span role="img" aria-label="magnifying glass">🔍</span> 404</Title>
                    <Subtitle isSize={3}>Not found...</Subtitle>
                </Container>
            </HeroBody>
        </Hero>
    );
}

export default NotFound;
