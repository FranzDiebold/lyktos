import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
    const previousPathname = useRef();

    useEffect(() => {
        if (props.location.pathname !== previousPathname.current) {
            window.scrollTo(0, 0);
        }

        previousPathname.current = props.location.pathname;
    });

    return props.children;
}

export default withRouter(ScrollToTop);
