// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import FormUncontrolled from './FormUncontrolled';

export default function App() {
    return (
        <div className="app">
            <FormUncontrolled 
                initialValues={{input: "test1", checkbox: true,  select: "two"}}
                onSubmit={(values)=>{console.log(values)}}            
            />
        </div>
    )
}