import React from 'react';
import { Link } from 'react-router-dom';

import { Footer as BulmaFooter, Container, Columns, Column } from 'bloomer';

function Footer() {
    const footerLinkStyles = {
        marginRight: '1.5rem',
    };

    return (
        <BulmaFooter>
            <Container>
                <Columns>
                    <Column>
                        <small>
                            made with <span role="img" aria-label="heart">❤️</span> by <a href="https://www.franzdiebold.ml" target="_blank" rel="noopener noreferrer">Franz Diebold</a>
                        </small>
                    </Column>
                    <Column className="has-text-right">
                        <small style={footerLinkStyles}>
                            <Link to="/site-notice">Site Notice</Link>
                        </small>
                        <small>
                            <Link to="privacy-policy">Privacy Policy</Link>
                        </small>
                    </Column>
                </Columns>
            </Container>
        </BulmaFooter>
    );
}

export default Footer;
