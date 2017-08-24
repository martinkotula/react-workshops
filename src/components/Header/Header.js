import React from 'react'
import PropTypes from 'prop-types';

import './Header.css';
import icon from './download.jpg';

const Header = function ({ children, componentToUse, ComponentToUse }) {
    let content = children;
    if (componentToUse) {
        return (
            <h1>{React.createElement(componentToUse, { text: content })}</h1>
        )
    }

    if (ComponentToUse) {
        return (
            <h1><ComponentToUse text={content} /></h1>
        )
    }

    return (
        <h1 className="header">
            <img src={icon} height="32" />
            {content}
        </h1>
    )
}

Header.defaultProps = {
    children: "!"
}

Header.propTypes = {
    children: PropTypes.string,
    componentToUse: PropTypes.func,
    ComponentToUse: PropTypes.func
}

export default Header;