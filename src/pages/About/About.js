import React from 'react';
import { Helmet } from 'react-helmet';

import {
    Hero, HeroBody, Container,
    Title, Subtitle,
    Columns, Column,
    Image, Content,
} from 'bloomer';

import './About.scss';

function About() {
    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>about 🔱 lyktos</title>
            </Helmet>

            <Image src="img/gods/gods.png" />

            <Hero className="first-section-after-title-image" isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title isSize="1">
                            <span role="img" aria-label="thanks">🔱</span> lyktos
                        </Title>
                        <Subtitle isSize="3">
                            Compare greek and roman gods and goddesses.
                        </Subtitle>
                    </Container>
                </HeroBody>
            </Hero>
            <Hero className="has-colored-bg" isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title>Project background</Title>
                        <Columns isVCentered>
                            <Column isSize={4}>
                                <Columns isCentered isVCentered isMobile>
                                    <Column isSize="narrow">
                                        <Image isSize="96x96" src="/img/about/react-logo.svg" />
                                    </Column>
                                    <Column isSize="narrow">
                                        <Subtitle isSize="1">+</Subtitle>
                                    </Column>
                                    <Column isSize="narrow">
                                        <Image isSize="96x96" src="/img/gods/greek/poseidon.svg" />
                                    </Column>
                                </Columns>
                            </Column>
                            <Column isSize={8} className="has-text-justified">
                                <Content>
                                    <p>
                                        What should you do if you both want to learn <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> and
                                        get to know <a href="https://en.wikipedia.org/wiki/Greek_mythology" target="_blank" rel="noopener noreferrer">greek</a> and <a href="https://en.wikipedia.org/wiki/Roman_mythology" target="_blank" rel="noopener noreferrer">roman</a> mythology? <br />
                                        You create <span role="img" aria-label="thanks">🔱</span> lyktos!
                                    </p>
                                    <p>
                                        It is open source, check it out on <a href="https://github.com/FranzDiebold/lyktos" target="_blank" rel="noopener noreferrer">GitHub</a>!
                                    </p>
                                </Content>
                            </Column>
                        </Columns>
                    </Container>
                </HeroBody>
            </Hero>
            <Hero className="has-white-bg" isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title>Etymology</Title>
                        <Columns isVCentered>
                            <Column isSize={4}>
                                <Columns isCentered>
                                    <Column isSize="narrow">
                                        <Image isSize="128x128" src={`/img/gods/greek/zeus.svg`} />
                                    </Column>
                                </Columns>
                            </Column>
                            <Column isSize={8}>
                                <Content>
                                    <p className="has-text-justified">
                                        <b>Lyktos</b>, Lyctus or Lyttos (Greek: Λύκτος or Λύττος), was one of the most considerable cities in ancient Crete, which appears in the Homeric catalogue. Lyttos is now a village in the municipality of Minoa Pediada.
                                    </p>
                                    <p className="has-text-justified">
                                        According to Hesiod, Theogony (477-484), <b>Rhea gave birth to Zeus</b> in Lyctus and hid him in a cave of Mount Aegaeon. The inhabitants of this ancient Doric city called themselves colonists of Sparta, and the worship of Apollo appears to have prevailed there.
                                    </p>
                                </Content>
                            </Column>
                        </Columns>
                    </Container>
                </HeroBody>
            </Hero>
            <Hero isSize="medium">
                <HeroBody>
                    <Container className="has-text-centered">
                        <Title><span role="img" aria-label="thanks">🙏</span> Thank you!</Title>
                        <Content>
                            <p>
                                All information is taken from <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>.
                            </p>
                            <p>
                                Gods vector illustrations by <a href="https://www.vecteezy.com/" target="_blank" rel="noopener noreferrer">www.Vecteezy.com</a>.
                            </p>
                            <p>
                                Heaven background designed by <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">macrovector / Freepik</a>.
                            </p>
                            <p>
                                <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
                                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                                </a>
                            </p>
                        </Content>
                    </Container>
                </HeroBody>
            </Hero>
        </div>
    );
}

export default About;
