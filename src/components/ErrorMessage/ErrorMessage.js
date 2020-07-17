import React from 'react';
import PropTypes from 'prop-types';

import {
    Message, MessageHeader, MessageBody,
    Columns, Column,
    Button,
} from 'bloomer';

function ErrorMessage(props) {
    const { message } = props;

    const reloadIcon = (
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,12H22.32L17.37,16.95L12.42,12H16.97C17,10.46 16.42,8.93 15.24,7.75C12.9,5.41 9.1,5.41 6.76,7.75C4.42,10.09 4.42,13.9 6.76,16.24C8.6,18.08 11.36,18.47 13.58,17.41L15.05,18.88C12,20.69 8,20.29 5.34,17.65C2.22,14.53 2.23,9.47 5.35,6.35C8.5,3.22 13.53,3.21 16.66,6.34C18.22,7.9 19,9.95 19,12Z" />
        </svg>
    );

    function reload() {
        window.location.reload();
    }

    return (
        <Message isColor="danger">
            <MessageHeader>
                <p>Error</p>
            </MessageHeader>
            <MessageBody>
                <Columns>
                    <Column>
                        {message}
                    </Column>
                </Columns>
                <Columns>
                    <Column className="has-text-centered">
                        <Button onClick={reload}>
                            <span className="icon">
                                {reloadIcon}
                            </span>
                            <span>Reload</span>
                        </Button>
                    </Column>
                </Columns>
            </MessageBody>
        </Message>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;