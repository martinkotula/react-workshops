// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import FormControlled from './FormControlled';

export default function App() {
    return (
        <div className="app">
            <FormControlled 
                initialValues={{input: "test1", checkbox: true,  select: "two"}}
                onSubmit={(values)=>{console.log(values)}}            
            />
        </div>
    )
}