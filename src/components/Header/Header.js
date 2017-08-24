import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import icon from './download.jpg';

export default class Header extends React.Component {

    constructor() {
        super();

        this.defaultProps = {
            children: "!"
        }

        this.propTypes = {
            children: PropTypes.string,
            componentToUse: PropTypes.func,
            ComponentToUse: PropTypes.func
        }
    }

    render() {
        let { children, componentToUse, ComponentToUse } = this.props;
        let content = children;
        if (componentToUse) {
            content = React.createElement(componentToUse, { text: content })
        }

        if (ComponentToUse) {
            content = <ComponentToUse text={content} />
        }

        return (
            <h1 className="header">
                <img src={icon} height="32" />
                {content}
            </h1>
        )
    }

}