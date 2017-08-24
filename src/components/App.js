// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ClassTest from './ClassTest';

export default function App() {
    return (
        <div className="app">
            <ClassTest className="test" classes={['test1', 'test2']} color='red' />
        </div>
    )
}