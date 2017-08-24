import React from 'react'

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

export default Header;