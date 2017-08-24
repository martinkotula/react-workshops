import React from 'react'
import PropTypes from 'prop-types';

const Header = function({children, componentToUse, ComponentToUse}){

    if(componentToUse){
        return (
            <h1>{React.createElement(componentToUse, {text: children})}</h1>
        )
    }

    if(ComponentToUse){
        return (
            <h1><ComponentToUse text={children}/></h1>
        )
    }

    return <h1>{children}</h1>;
}

Header.propTypes = {
    children: PropTypes.string,
    componentToUse: PropTypes.func,
    ComponentToUse: PropTypes.func
}

export default Header;