import React from 'react';

import { Section, Hero, HeroBody, Container, Title } from 'bloomer';

function NotFound() {
    return (
        <Section>
            <Hero isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title>Not found...</Title>
                    </Container>
                </HeroBody>
            </Hero>
        </Section>
    );
}

export default NotFound;
