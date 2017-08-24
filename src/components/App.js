// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import FormUncontrolled from './FormUncontrolled';

export default function App() {
    const initialValues = {
        input: "test1",
        checkbox: true,
        select: "two"
    }
    return (
        <div className="app">
            <FormUncontrolled initialValues={initialValues} onSubmit={(values)=>{console.log(values)}}/>
        </div>
    )
}