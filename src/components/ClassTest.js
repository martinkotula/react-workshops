import React from 'react';
import classnames from 'classnames';

const ClassTest = props => {

    const classes = classnames(
        props.classes,
        {
            [props.className]: props.className,
            'class-test': true,
            [`color-${props.color}`]: props.color
        },
        (() => props.color + '-func')()
    );

    return (
        <div className="class-test">{classes}</div>
    )

}

export default ClassTest;