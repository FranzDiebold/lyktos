import React from 'react';
import { Helmet } from 'react-helmet';

import { Section, Container, Hero, HeroBody, Content } from 'bloomer';

function SiteNotice() {
    return (
        <div>
            <Helmet>
                { /* eslint-disable-next-line */ }
                <title>Site Notice | 🔱 lyktos</title>
            </Helmet>

            <Section>
                <Container>
                    <Hero>
                        <HeroBody>
                            <Content>
                                <h1>Impressum / Site Notice</h1>

                                <h3>Angaben gem&auml;&szlig; &sect; 5 TMG / Legal Information</h3>
                                <p className="has-text-justified">
                                    Franz Diebold<br />
                                    Franz-Mayer-Str. 1<br />
                                    93053 Regensburg<br />
                                    GERMANY
                                </p>

                                <h3>Kontakt / Contact</h3>
                                <p className="has-text-justified">
                                    E-Mail: lyktos.app@gmail.com
                                </p>

                                <h4>Haftung f&uuml;r Inhalte</h4>
                                <p className="has-text-justified">
                                    Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                    Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
                                </p>
                                <p className="has-text-justified">
                                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt.
                                    Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
                                    Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                                </p>

                                <h4>Haftung f&uuml;r Links</h4>
                                <p className="has-text-justified">
                                    Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                                    Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                                </p>
                                <p className="has-text-justified">
                                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                                </p>

                                <h4>Urheberrecht</h4>
                                <p className="has-text-justified">
                                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                    Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                                    Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p className="has-text-justified">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                                    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                                    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                                </p>

                                <small className="is-pulled-right">
                                    Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de/impressum-generator.html</a>
                                </small>
                            </Content>
                        </HeroBody>
                    </Hero>
                </Container>
            </Section>
        </div>
    );
}

export default SiteNotice;
