import PropTypes from 'prop-types';
import { Link as ReachRouterLink } from '@reach/router';

const Link = ({ children, isExternalLink, isSameTab, to, ...props }) => {
    if (isExternalLink) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    } else if (isSameTab) {
        return (
            <a href={to} {...props}>
                {children}
            </a>
        );
    }
    return (
        <ReachRouterLink to={to} {...props}>
            {children}
        </ReachRouterLink>
    );
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isExternalLink: PropTypes.bool.isRequired,
    isSameTab: PropTypes.bool,
    to: PropTypes.string.isRequired
};
export default Link;
