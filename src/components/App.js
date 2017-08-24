import React from 'react';
import Header from './Header/Header';
import Uppercase from './Uppercase';

export default function App(props) {
    return (
        <div className="app">
            <Header>Warsztaty React</Header>
            <Header children={<Uppercase text="uppercase me"/>}/>
            <Header />
            <Header children="me too!" ComponentToUse={Uppercase} />
            <Header children="me too!" componentToUse={Uppercase} />
        </div>
    )
}